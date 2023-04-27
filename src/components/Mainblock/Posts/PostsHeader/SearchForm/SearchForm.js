import React from 'react';
import './SearchForm.css';
import searchIcon from '../../../../../assets/images/search.svg';

export const SearchForm = () => {
  return (
   <form className='searchForm'>
   <input type="text" placeholder='Найти' />
    <img src={searchIcon} alt="search" />
   </form>
   
  )
}
