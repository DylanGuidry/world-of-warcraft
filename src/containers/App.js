import Homepage from './Homepage'
import Pets from './Pets';
import Mounts from './Mounts';
import React, { useEffect, useState } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/pets/' element={<Pets />} />
          <Route path='/mounts/' element={<Mounts />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
