import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import BookList from './BookList';
import BookModal from './BookModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from '../store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const App = () => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <BookModal categories={categories}/>
            <BookList categories={categories}/>
          </Container>
        </div>
      </Provider>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="App">
//           <AppNavbar />
//           <Container>
//           <BookModal />
//           <BookList />
//         </Container>
//         </div>
//       </Provider>
//     );
//   }
// }


export default App;
