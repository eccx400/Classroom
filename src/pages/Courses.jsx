import React, { Component } from "react";
import { Lead, BSpan } from "bootstrap-4-react";

import "bootstrap/dist/css/bootstrap.min.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import awsExports from "../aws-exports";

const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $title: String!
    $professor: String!
    $description: String!
  }
  ) {
    createCourse(title: $title, professor: $professor, description: $description) {
      __typename
      id
      title
      professor
      description
      createdAt
      updatedAt
      owner
    }
  }
`;

const getAllCourses = /* GraphQL */ `
  query ListCourses{
      items {
        id
        title
        professor
        description
      }
    }
  }
`;

const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $id: ID!
    $title: String!
    $professor: String!
    $description: String!
  ) {
    updateCourse(id: $id, title: $title, professor: $professor, description: $description) {
      __typename
      id
      title
      professor
      description
    }
  }
`;

const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $id: ID!
  ) {
    deleteCourse(id: $id) {
      __typename
      id
      title
      professor
      description
    }
  }
`;

const searchCourses = /* GraphQL */ `
  query SearchCourses(
    $search: String
  ) {
    searchCourses(
      filter:{title:{match:$search}
    ) {
      items {
        id
        title
        professor
        description
      }
    }
  }
`;

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      professor: "",
      description: "",
      searchResult: "",
      value: "",
      notes: [],
      displayAdd: true,
      displayUpdate: false,
      displaySearch: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    const notes = await API.graphql(graphqlOperation(getAllCourses));
    this.setState({ notes: notes.data.listNotes.items });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    await API.graphql(graphqlOperation(createCourse, {title: this.state.title, professor: this.state.professor, description: this.state.description }));
    this.listCourses();
    this.setState({ value: "" });
  }
  async handleDelete(id) {
    const noteId = { id: id };
    await API.graphql(graphqlOperation(deleteCourse, noteId));
    this.listNotes();
  }
  async handleUpdate(event) {
    event.preventDefault();
    event.stopPropagation();
    await API.graphql(graphqlOperation(updateCourse, { id: this.state.id, title: this.state.title, professor: this.state.professor, description: this.state.description }));
    this.listCourses();
    this.setState({ displayAdd: true, displayUpdate: false, value: "" });
  }
  async handleSearch(event) {
    event.preventDefault();
    event.stopPropagation();
    const search = { search: this.state.title };
    const result = await API.graphql(graphqlOperation(searchCourses, search));
    this.setState({
      searchResults: result.data.searchNotes.items,
      notes: [],
      displaySearch: true,
      title: "",
    });
    if (JSON.stringify(result.data.searchNotes.items) === "[]") {
      this.setState({
        searchResults: [
          { note: "No Match: Clear the search to go back to your Notes" },
        ],
      });
    }
  }
  selectNote(note) {
    this.setState({
      id: note.id,
      title: note.title,
      professor: note.professor,
      description: note.description,
      displayAdd: false,
      displayUpdate: true,
    });
  }
  async listNotes() {
    const notes = await API.graphql(graphqlOperation(getAllCourses));
    this.setState({
      notes: notes.data.listNotes.items,
      searchResults: [],
      displaySearch: false,
    });
  }

  render() {
    const data = [].concat(this.state.notes).map((item, i) => (
      <div className="alert alert-primary show" role="alert">
        <span key={item.i} onClick={this.selectNote.bind(this, item)}>
          {item.title, item.professor, item.description}
        </span>
        <button
          key={item.i}
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={this.handleDelete.bind(this, item.id)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    ));
    const searchResults = [].concat(this.state.searchResults).map((item, i) => (
      <div className="alert alert-success show" role="alert">
        <span key={item.i}>{item.title, item.professor, item.description}</span>
      </div>
    ));
    return (
      <div className="App">
        <div className="container">
          {this.state.displayAdd ? (
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Add Courses"
                  aria-label="Note"
                  aria-describedby="basic-addon2"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary border border-light"
                    type="button"
                    onClick={this.handleSubmit}
                  >
                    Add Courses
                  </button>
                  <button
                    className="btn btn-primary border border-light"
                    type="button"
                    onClick={this.handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          ) : null}
          {this.state.displayUpdate ? (
            <form onSubmit={this.handleUpdate}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Update Course"
                  aria-label="Note"
                  aria-describedby="basic-addon2"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Update Course
                  </button>
                </div>
              </div>
            </form>
          ) : null}
        </div>
        <br />
        <div className="container">
          {searchResults}
          {this.state.displaySearch ? (
            <button
              className="button btn-success float-right"
              onClick={this.listNotes.bind(this)}
            >
              <span aria-hidden="true">Clear Search</span>
            </button>
          ) : null}
          {data}
        </div>
      </div>
    );
  }
}
