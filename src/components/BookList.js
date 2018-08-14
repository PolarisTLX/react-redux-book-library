import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuid from 'uuid';
import { connect } from 'react-redux';
import { getBooks, addBook, deleteBook } from '../actions/bookActions';
import { changeFilter } from '../actions/filterActions';
import PropTypes from 'prop-types';

import CategoryFilter from './CategoryFilter';
import Book from './Book';
import EditModal from './EditModal';

class BookList extends Component {

  componentDidMount() {
    this.props.getBooks();
  };

  onDeleteClick = (id) => {
    this.props.deleteBook(id);
  };

  handleFilterChange = (e) => {
    this.props.changeFilter(e.target.value);
  }

  render() {
    const { books } = this.props.library;
    const catFilter = this.props.catFilter.filter;
    return (
      <Container style={{marginBottom: "20px"}}>
        <CategoryFilter categories={['All Categories',...this.props.categories]} onChange={this.handleFilterChange}/>
        <ListGroup>
          <TransitionGroup className="book-list">
            {books.filter(book => catFilter.includes(book.category)).map(({ id, name, author, category}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Book name={name} author={author} category={category} />
                  <Button
                  className="remove-btn"
                  color="dark"
                  size="sm"
                  onClick={() => this.onDeleteClick(id)}
                  >
                  ⨉
                  </Button>
                  <EditModal categories={this.props.categories} id={id} name={name} author={author} category={category} />
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  library: PropTypes.object.isRequired,
  catFilter: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  library: state.library,
  catFilter: state.filter
});

export default connect(mapStateToProps,
  { getBooks,
    addBook,
    deleteBook,
    changeFilter
  }
)(BookList);
