import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuid from 'uuid';
import { connect } from 'react-redux';
import { getBooks, addBook, deleteBook } from '../actions/bookActions';
import { changeFilter } from '../actions/filterActions';
import PropTypes from 'prop-types';

import BookModal from './BookModal';
import CategoryFilter from './CategoryFilter';
import Book from './Book';

class BookList extends Component {

  componentDidMount() {
    this.props.getBooks();
  };

  onDeleteClick = id => {
    this.props.deleteBook(id);
  };

  handleFilterChange = e => {
    this.props.changeFilter(e.target.value);
  }

  render() {
    const { books } = this.props.library;
    const catFilter = this.props.catFilter.filter;
    const selectedFilter = catFilter.length > 1 ? 'All Categories' : catFilter[0]

    return (
      <Container style={{marginBottom: "20px"}}>
        <BookModal categories={this.props.categories}/>
        <CategoryFilter selectedCategory={selectedFilter} categories={['All Categories',...this.props.categories]} onChange={this.handleFilterChange}/>
        <ListGroup>
          <TransitionGroup className="book-list">
            {books.filter(book => catFilter.includes(book.category))
              .map(({ _id, id, name, author, category, current_chapter, current_page, total_pages}) => (
              <CSSTransition key={_id || id} timeout={500} classNames="fade">
                <ListGroupItem  className="book">
                  <Book categories={this.props.categories}
                        _id={_id}
                        id={id}
                        name={name}
                        author={author}
                        category={category}
                        current_page={current_page}
                        total_pages={total_pages}
                        current_chapter={current_chapter}
                        percentage={Math.floor((current_page/total_pages)*100)}
                        onDeleteClick={() => this.onDeleteClick(_id || id)}
                  />
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
