import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Pc from './Pc';
import PlayStation from './PlayStation';
import Xbox from './Xbox';
import Nintendo from './Nintendo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/pc" element={<Pc />} />
        <Route path="/playstation" element={<PlayStation />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/nintendo" element={<Nintendo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


