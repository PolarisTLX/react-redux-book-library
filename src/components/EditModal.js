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

class EditModal extends Component {
  state = {
    modal: false,
    name: this.props.name,
    author: this.props.author,
    category: this.props.category
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
      id: this.props.id,
      name: this.state.name,
      author: this.state.author,
      category: this.state.category
    }

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
          className="edit-button"
          color="medium"
          size="sm"
          onClick={this.toggle}
        >
          &#x270E;
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Edit your existing book from your library
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">Title:</Label>
                <Input
                  type="text"
                  name="name"
                  id="title"
                  placeholder="Example: Lord of The Rings"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <Label for="author">Author:</Label>
                <Input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Example: J.R. Tolkien"
                  value={this.state.author}
                  onChange={this.onChange}
                />
                <Label for="category">Category:</Label>
                <Input
                  type="select"
                  name="category"
                  id="category"
                  onChange={this.onChange}
                  value={this.state.category}
                >
                {this.props.categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </Input>
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >
                  Edit Book
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

export default connect(mapStateToProps, { updateBook })(EditModal);
