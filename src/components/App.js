import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './AppNavbar';
// import './App.css';
// import Footer from './Footer';
// import AddTodo from '../containers/AddTodo';
// import VisibleTodoList from '../containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <h1>Book Store</h1>
      </div>
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
