import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ProgressCircle from './ProgressCircle';
import EditModal from './EditModal';


class Book extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 book-details">
            <h5>{this.props.category}</h5>
            <h4>{this.props.name}</h4>
            <p style={{color: "#007bff"}}>{this.props.author}</p>
          </div>
          <div className="col-md-4 text-center progress-div">
            <ProgressCircle
              strokeWidth="8"
              sqSize="90"
              percentage={this.props.percentage}
            />
            <div className="progress-text">
              <h2>{this.props.percentage}%</h2>
              <p>Completed</p>
            </div>
          </div>
          <div className="col-md-4 chapter-div">
            <h6>CURRENT CHAPTER</h6>
            <h4>{this.props.current_chapter}</h4>
          </div>
        </div>
        <div className="row buttons-row">
          <div className="col-md-4">
            <Button className="remove-btn"
                    size="sm"
                    onClick={this.props.onDeleteClick}
            >
              Remove
            </Button>
            <EditModal categories={this.props.categories}
                       _id={this.props._id}
                       id={this.props.id}
                       name={this.props.name}
                       author={this.props.author}
                       category={this.props.category}
                       current_chapter={this.props.current_chapter}
                       current_page={this.props.current_page}
                       total_pages={this.props.total_pages}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Book;

//NOTE: Change to functional component?
