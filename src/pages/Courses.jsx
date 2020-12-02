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

const searchNote = `query searchNotes($search: String){
    searchNotes(filter:{note:{match:$search}}){
      items{
        id
        note
      }
    }
  }`;
export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      notes: [],
      searchResults: [],
      value: "",
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
    const notes = await API.graphql(graphqlOperation(readNote));
    this.setState({ notes: notes.data.listNotes.items });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const note = { note: this.state.value };
    await API.graphql(graphqlOperation(createNote, note));
    this.listNotes();
    this.setState({ value: "" });
  }
  async handleDelete(id) {
    const noteId = { id: id };
    await API.graphql(graphqlOperation(deleteNote, noteId));
    this.listNotes();
  }
  async handleUpdate(event) {
    event.preventDefault();
    event.stopPropagation();
    const note = { id: this.state.id, note: this.state.value };
    await API.graphql(graphqlOperation(updateNote, note));
    this.listNotes();
    this.setState({ displayAdd: true, displayUpdate: false, value: "" });
  }
  async handleSearch(event) {
    event.preventDefault();
    event.stopPropagation();
    const search = { search: this.state.value };
    const result = await API.graphql(graphqlOperation(searchNote, search));
    this.setState({
      searchResults: result.data.searchNotes.items,
      notes: [],
      displaySearch: true,
      value: "",
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
      value: note.note,
      displayAdd: false,
      displayUpdate: true,
    });
  }
  async listNotes() {
    const notes = await API.graphql(graphqlOperation(readNote));
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
    const searchResults = [].concat(this.state.searchResults).map((item, i) => (
      <div className="alert alert-success show" role="alert">
        <span key={item.i}>{item.note}</span>
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
                  placeholder="New Note"
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
                    Add Note
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
