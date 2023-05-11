import React from 'react';
import { BrowserRouter, Routes,Route, Form } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Second from './components/second';
import Book from './components/RegForm';
import Booked from './components/booked';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route exact path="" element={<Home/>} />
        <Route exact path="/second/:id" element={<Second/>} />
        <Route exact path="/book/:id" element={<Book/>} />
        <Route exact path="/booked" element={<Booked/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
