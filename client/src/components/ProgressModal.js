import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { updateBook } from '../actions/bookActions';

class ProgressModal extends Component {
  state = {
    modal: false,
    name: this.props.name,
    author: this.props.author,
    category: this.props.category,
    current_chapter: this.props.current_chapter,
    current_page: this.props.current_page,
    total_pages: this.props.total_pages
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const modifiedBook = {
      // id: uuid(),
      _id: this.props._id,
      name: this.state.name,
      author: this.state.author,
      category: this.state.category,
      current_chapter: this.state.current_chapter,
      current_page: this.state.current_page,
      total_pages: this.state.total_pages
    }
    console.log(modifiedBook);

    // Edit book via updateBook action:
    // this.props.addBook(newBook);
    this.props.updateBook(modifiedBook);

    // Close modal:
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          className="update-progress-button"
          color="primary"
          size="sm"
          onClick={this.toggle}
        >
          Update Progress
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Update your progress in {this.state.name}:
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="current_chapter">Current Chapter:</Label>
                <Input
                  type="text"
                  name="current_chapter"
                  id="current_chapter"
                  placeholder="Example: Chapter 1 - The Beginning"
                  value={this.state.current_chapter}
                  onChange={this.onChange}
                />
                <Label for="current_page">Current Page:</Label>
                <Input
                  type="number"
                  name="current_page"
                  id="current_page"
                  placeholder="Example: 50"
                  value={this.state.current_page}
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >
                  Update Progress
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  book: state.book
});

export default connect(mapStateToProps, { updateBook })(ProgressModal);
