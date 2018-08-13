import React, { Component } from 'react';
import {
  Label,
  Input
} from 'reactstrap';

class CategoryFilter extends Component {
  state = {
    selectedCategory: 'All'
  }

  render() {
    return (
      <Input type="select" name="category-select" id="category-select" onChange={this.props.onChange}>
        {this.props.categories.map(cat =>
          <option key={cat} value={cat} selected={this.state.selectedCategory == cat ? true : false}>{cat}</option>
        )}
      </Input>
    )
  }
}

export default CategoryFilter
