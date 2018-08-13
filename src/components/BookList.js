import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuid from 'uuid';
import { connect } from 'react-redux';
import { getBooks, addBook, deleteBook } from '../actions/bookActions';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {

  componentDidMount() {
    this.props.getBooks();
  };

  // onDeleteClick = (id) => (e) => {
  onDeleteClick = (id) => {
    console.log(id);
    // console.log(e);
    console.log(this.props.deleteBook(id));
    this.props.deleteBook(id);
  };

  render() {
    const { books } = this.props.library;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="book-list">
            {books.map(({ id, name, author, category}) => (
              <Book key={id} id={id} name={name} author={author} category={category} onDeleteClick={this.onDeleteClick} />
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}


BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  library: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  library: state.library
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (id) => {
      dispatch(deleteBook(id))
    },
    getBooks: () => {
      dispatch(getBooks())
    }
  }
};

// export default connect(mapStateToProps,
//   { getBooks,
//     addBook,
//     deleteBook
//   }
// )(BookList);

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
