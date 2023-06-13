import './App.css';
import React, { Provider } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories';
import Books from './Components/Books';
import Navbar from './Components/Navbar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
