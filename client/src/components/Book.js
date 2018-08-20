import React, { Component } from 'react';
import ProgressCircle from './ProgressCircle';

class Book extends Component {

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-4">
            <h5 style={{color: "gray"}}>{this.props.category}</h5>
            <h4>{this.props.name}</h4>
            <p style={{color: "rgb(66,139,202)"}}>{this.props.author}</p>
          </div>
          <div class="col-md-4">
            <ProgressCircle
              strokeWidth="10"
              sqSize="150"
              percentage={this.props.percentage}
            />
            <h3>{this.props.percentage}%</h3>
            <p>Completed</p>
          </div>
          <div class="col-md-4">
            <h5>CURRENT CHAPTER</h5>
            <p>{this.props.current_chapter}</p>
            {/*currnet chapter and progress button*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Book;

//NOTE: Change to functional component?
