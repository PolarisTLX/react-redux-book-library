import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Book extends Component {

  render() {
    return (
      <div>
        <img class="book-image" src="https://78.media.tumblr.com/c7329fc68d64779401be16fc54498919/tumblr_mtw1qlSLXn1sob0fvo1_500.jpg" />
        <h5 style={{color: "gray"}}>{this.props.category}</h5>
        <h4>{this.props.name}</h4>
        <p style={{color: "rgb(66,139,202)"}}>{this.props.author}</p>
      </div>
    )
  }
}

export default Book;

//NOTE: Change to functional component?
