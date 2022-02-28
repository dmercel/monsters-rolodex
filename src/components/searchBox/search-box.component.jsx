import React from 'react';
import './search-box.styles.css'

//export makes the component useable in the app
export const SearchBox = ({ placeholder, handleChange }) => (

    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
      />

)