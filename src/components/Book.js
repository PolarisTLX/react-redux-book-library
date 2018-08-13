import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { deleteBook } from '../actions/bookActions';
import PropTypes from 'prop-types';

class Book extends Component {

  // onDeleteClick = (id) => {
  //   this.props.deleteBook(id);
  // };

  render() {
    return (

      <CSSTransition timeout={500} classNames="fade">
        <ListGroupItem>

          <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={() => this.props.onDeleteClick(this.props.id)}
          >
            &times;
          </Button>
          <span>{this.props.name}</span> - <span>{this.props.author}</span> - <span>{this.props.category}</span>

        </ListGroupItem>
      </CSSTransition>

    )
  }

}

// Book.propTypes = {
//   library: PropTypes.object.isRequired
// }

Book.propTypes = {
  onDeleteClick: PropTypes.func.isRequired
}

//
// const mapStateToProps = (state) => ({
//   library: state.library
// });

export default Book;

// export default connect(mapStateToProps,
//   {
//     deleteBook
//   }
// )(Book);
