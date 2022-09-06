import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return (
    <>
      <Paper
        component='form'
        onSubmit={() => { }}
        sx={{
          borderRadius: 20,
          border: '1px solid #e3e3e3',
          pl: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
        }}
      >

        <input placeholder='Search...' className='search-bar' onChange={() => { }} value={''} />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
          <SearchIcon />
        </IconButton>

      </Paper>
    </>
  )
}

export default SearchBar