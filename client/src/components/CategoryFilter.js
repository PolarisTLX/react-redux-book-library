import React, { Component } from 'react';
import { Input } from 'reactstrap';

class CategoryFilter extends Component {
  state = {
    selectedCategory: this.props.selectedCategory
  }

  handleChange = (event) => {
    this.setState({
      selectedCategory: event.target.value
    });
    this.props.onChange(event);
  }


  render() {
    return (
      <Input
        type="select"
        name="category-select"
        id="category-select"
        onChange={this.handleChange}
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
