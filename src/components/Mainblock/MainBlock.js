import React from 'react';
import './MainBlock.css'
import { Sidebar } from './Sidebar/Sidebar';
import { Posts } from './Posts/Posts';
import './MainBlock.css';

export const MainBlock = ({ setIsLoggedIn }) => {
  return (
    <>
      <Sidebar setIsLoggedIn={setIsLoggedIn} />
      <main className='mainBlock'>
        <Posts />
      </main>
    </>
  )
}
