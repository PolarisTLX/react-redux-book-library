import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Book extends Component {

  render() {
    return (
      <div>
        <span>{this.props.name}</span> - <span>{this.props.author}</span> - <span>{this.props.category}</span>
      </div>
    )
  }
}

export default Book;

//NOTE: Change to functional component?
