import React, { Component } from 'react';
import { Container, Lead } from 'bootstrap-4-react';

export default class Main extends Component {
  render() {
    return (
      <Container as="main" role="main">
        <div className="starter-template">
          <h1>Bootstrap starter template</h1>
          <Lead>
            Use this document as a way to quickly start any new project.<br />
            All you get is this text and a mostly barebones HTML document.
          </Lead>
        </div>
      </Container>
    )
  }
}