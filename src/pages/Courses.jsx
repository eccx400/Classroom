import React, { Component } from "react";
import { Lead, BSpan } from "bootstrap-4-react";

import "bootstrap/dist/css/bootstrap.min.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import awsExports from "../aws-exports";

const createNote = `mutation createNote($note: String!){
    createNote(input:{
      note: $note
    }){
      __typename
      id
      note
    }
  }`;

const readNote = `query listNotes{
    listNotes{
      items{
        __typename
        id
        note
      }
    }
  }`;

const updateNote = `mutation updateNote($id: ID!,$note: String){
    updateNote(input:{
      id: $id
      note: $note
    }){
      __typename
      id
      note
    }
  }`;

const deleteNote = `mutation deleteNote($id: ID!){
    deleteNote(input:{
      id: $id
    }){
      __typename
      id
      note
    }
  }`;

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      notes: [],
      value: "",
      displayAdd: true,
      displayUpdate: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async componentDidMount() {
    console.log("In ComponentDidMount");
    const notes = await API.graphql(graphqlOperation(readNote));
    this.setState({ notes: notes.data.listNotes.items });
  }

  handleChange(event) {
    console.log("In handle change");
    this.setState({ value: event.target.value });
  }
  async handleSubmit(event) {
    console.log("In HandleSubmit");
    event.preventDefault();
    event.stopPropagation();
    const note = { note: this.state.value };
    await API.graphql(graphqlOperation(createNote, note));
    this.listNotes();
    this.setState({ value: "" });
  }

  async handleDelete(id) {
    console.log("In HandleDelete");
    const noteId = { id: id };
    await API.graphql(graphqlOperation(deleteNote, noteId));
    this.listNotes();
  }

  async handleUpdate(event) {
    console.log("In HandleUpdate");
    event.preventDefault();
    event.stopPropagation();
    const note = { id: this.state.id, note: this.state.value };
    await API.graphql(graphqlOperation(updateNote, note));
    this.listNotes();
    this.setState({ displayAdd: true, displayUpdate: false, value: "" });
  }

  selectNote(note) {
    console.log("In SelectNote");
    this.setState({
      id: note.id,
      value: note.note,
      displayAdd: false,
      displayUpdate: true,
    });
  }

  async listNotes() {
    console.log("In ListNote");
    const notes = await API.graphql(graphqlOperation(readNote));
    this.setState({ notes: notes.data.listNotes.items });
  }

  render() {
    const data = [].concat(this.state.notes).map((item, i) => (
      <div className="alert alert-primary alert-dismissible show" role="alert">
        <span key={item.i} onClick={this.selectNote.bind(this, item)}>
          {item.note}
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
    return (
      <div className="App">
        <div className="container">
          {this.state.displayAdd ? (
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="New Note"
                  aria-label="Note"
                  aria-describedby="basic-addon2"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Add Note
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
                  placeholder="Update Note"
                  aria-label="Note"
                  aria-describedby="basic-addon2"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Update Note
                  </button>
                </div>
              </div>
            </form>
          ) : null}
        </div>
        <br />
        <div className="container">{data}</div>
      </div>
    );
  }
}
