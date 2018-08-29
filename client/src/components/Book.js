import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

import ProgressCircle from './ProgressCircle';
import EditModal from './EditModal';


class Book extends Component {

  render() {

    const {
      category,
      categories,
      name,
      author,
      percentage,
      current_chapter,
      current_page,
      total_pages,
      _id,
      id,
      onDeleteClick
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-4 book-details">
            <h5>{category}</h5>
            <h4>{name}</h4>
            <p style={{color: "#007bff"}}>{author}</p>
          </div>
          <div className="col-md-4 text-center progress-div">
            <ProgressCircle
              strokeWidth="8"
              sqSize="90"
              percentage={percentage}
            />
            <div className="progress-text">
              <h2>{percentage}%</h2>
              <p>Completed</p>
            </div>
          </div>
          <div className="col-md-4 chapter-div">
            <h6>CURRENT CHAPTER</h6>
            <h4>{current_chapter}</h4>
          </div>
        </div>
        <div className="row buttons-row">
          <div className="col-md-4">
            <Button className="remove-btn"
                    size="sm"
                    onClick={onDeleteClick}
            >
              Remove
            </Button>
            <EditModal categories={categories}
                       _id={_id}
                       id={id}
                       name={name}
                       author={author}
                       category={category}
                       current_chapter={current_chapter}
                       current_page={current_page}
                       total_pages={total_pages}
            />
          </div>
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  current_chapter: PropTypes.string,
  percentage: PropTypes.number.isRequired,
  current_page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
  user_id: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired
}

export default Book;

//NOTE: Change to functional component?
