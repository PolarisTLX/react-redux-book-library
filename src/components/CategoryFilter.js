import React, { Component } from 'react';
import { Input } from 'reactstrap';

class CategoryFilter extends Component {
  state = {
    selectedCategory: 'All'
  }

  render() {
    return (
      <Input
        type="select"
        name="category-select"
        id="category-select"
        onChange={this.props.onChange}
        value={this.state.selectedCategory}
        >
        {this.props.categories.map(cat =>
          <option key={cat} value={cat}>{cat}</option>
        )}
      </Input>
    )
  }
}

export default CategoryFilter
