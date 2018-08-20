import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ProgressCircle from './ProgressCircle';
import EditModal from './EditModal';


class Book extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h5 style={{color: "gray"}}>{this.props.category}</h5>
            <h4>{this.props.name}</h4>
            <p style={{color: "rgb(66,139,202)"}}>{this.props.author}</p>
          </div>
          <div className="col-md-4">
            <ProgressCircle
              strokeWidth="8"
              sqSize="90"
              percentage={this.props.percentage}
            />
            <div className="completed-text">
              <h3>{this.props.percentage}%</h3>
              <p>Completed</p>
            </div>
          </div>
          <div className="col-md-4">
            <h5>CURRENT CHAPTER</h5>
            <p>{this.props.current_chapter}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Button className="remove-btn"
                    color="dark"
                    size="sm"
                    onClick={this.props.onDeleteClick}
            >
              &times;
            </Button>
            <EditModal categories={this.props.categories}
                       _id={this.props._id}
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
