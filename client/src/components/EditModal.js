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
    category: this.props.category,
    current_chapter: this.props.current_chapter,
    current_page: this.props.current_page,
    total_pages: this.props.total_pages,
    modal_form: "Edit"
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
      id: this.props.id,
      name: this.state.name,
      author: this.state.author,
      category: this.state.category,
      current_chapter: this.state.current_chapter,
      current_page: this.state.current_page,
      total_pages: this.state.total_pages
    }

    console.log(modifiedBook);

    // Edit book via updateBook action:
    this.props.updateBook(modifiedBook);

    // Close modal:
    this.toggle();
  };

  render() {

    let formgroup;
    if (this.state.modal_form === "Edit") {
      formgroup = (
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
          <Label for="total_pages">Total Pages:</Label>
          <Input
            type="number"
            name="total_pages"
            id="total_pages"
            placeholder="Example: 394"
            value={this.state.total_pages}
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
      )
    } else {
      formgroup = (
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
            max={this.state.total_pages}
          />
          <Button
            color="dark"
            style={{marginTop: '2rem'}}
            block
          >
            Update Progress
          </Button>
        </FormGroup>
      )
    }

    return (
      <div>
        {/*EDIT BUTTON*/}
        <Button
          className="edit-button"
          size="sm"
          onClick={() => {
              this.setState({modal_form: "Edit"});
              this.toggle();
          }}
        >
          Edit
        </Button>

        {/*PROGRESS BUTTON*/}
        <Button
          className="update-progress-button"
          color="primary"
          size="sm"
          onClick={() => {
              this.setState({modal_form: "Progress"});
              this.toggle();
          }}
        >
          Update Progress
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
              { formgroup }
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
