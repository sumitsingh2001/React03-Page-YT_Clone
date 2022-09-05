import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Feed,
  ChannelDetail,
  SearchTerm,
  VIdeoDetail,
  Navbar,
} from './components';
import { Box } from '@mui/material';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: 'red' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VIdeoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchTerm />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
