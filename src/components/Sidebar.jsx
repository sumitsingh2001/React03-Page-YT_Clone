import React from 'react'
import { Stack } from '@mui/system';

import { categories } from '../utils/constants';

const selectedCategory = 'New';

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((Category) => {
        return (
          <>
            <button
              className="category-btn"
              style={{ background: Category.name === selectedCategory && '#FC1503', color: '#fff' }}
              onClick={() => { }}
              key={Category.name}>

              <span style={{ color: Category.name === selectedCategory ? 'White' : 'red', marginRight: '15px' }}>{Category.icon}</span>
              <span style={{ opacity: Category.name === selectedCategory ? '1' : '0.8' }}>{Category.name} </span>
            </button>
          </>
        )
      })}
    </Stack >
  )
}

export default Sidebar