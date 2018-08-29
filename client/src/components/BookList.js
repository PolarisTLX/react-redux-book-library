import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getBooks, addBook, deleteBook } from '../actions/bookActions';
import { changeFilter } from '../actions/filterActions';
import PropTypes from 'prop-types';

import BookModal from './BookModal';
import CategoryFilter from './CategoryFilter';
import Book from './Book';

class BookList extends Component {
  componentDidMount() {
    if(!this.props.auth.isAuthenticated) {
      // if NOT loged in, redirect to login page:
      this.props.history.push('/login');
    }
    // otherwise, load books:
    this.props.getBooks(this.props.auth.user.id);
  };

  componentWillReceiveProps(nextProps) {
    if(!nextProps.auth.isAuthenticated) {
      // once logged out, redirect user to the login page
      this.props.history.push('/login');
    }
  }


  onDeleteClick = id => {
    this.props.deleteBook(id);
  };

  handleFilterChange = e => {
    this.props.changeFilter(e.target.value);
  }

  render() {

    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    const { books } = this.props.library;
    const catFilter = this.props.catFilter.filter;
    const selectedFilter = catFilter.length > 1 ? 'All Categories' : catFilter[0]

    return (
      <Container style={{marginBottom: "20px"}}>
        <BookModal
          categories={categories}
          user_id={this.props.auth.user.id}
        />
        <CategoryFilter selectedCategory={selectedFilter} categories={['All Categories',...categories]} onChange={this.handleFilterChange}/>
        <ListGroup>
          <TransitionGroup className="book-list">
            {books.filter(book => catFilter.includes(book.category))
              .map(({ _id, id, name, author, category, current_chapter, current_page, total_pages}) => (
              <CSSTransition key={_id || id} timeout={500} classNames="fade">
                <ListGroupItem  className="book">
                  <Book categories={categories}
                        _id={_id}
                        id={id}
                        name={name}
                        author={author}
                        category={category}
                        current_page={current_page}
                        total_pages={total_pages}
                        current_chapter={current_chapter}
                        percentage={Math.floor((current_page/total_pages)*100)}
                        user_id={this.props.auth.user.id}
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
  addBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  library: PropTypes.object.isRequired,
  catFilter: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  library: state.library,
  catFilter: state.filter,
  auth: state.auth
});

export default connect(mapStateToProps,
  { getBooks,
    addBook,
    deleteBook,
    changeFilter
  }
)(BookList);
