import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import BookList from './BookList';
import BookModal from './BookModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from '../store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import Footer from './Footer';
// import AddTodo from '../containers/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <h1>Book Store</h1>
          <Container>
          <BookModal />
          <BookList />
        </Container>
        </div>
      </Provider>
    );
  }
}
// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// );

export default App;
