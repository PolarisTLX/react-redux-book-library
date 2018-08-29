import React, { Component } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

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

CategoryFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CategoryFilter
