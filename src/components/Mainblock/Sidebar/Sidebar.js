import React from 'react';
import './Sidebar.css';
import { Navigation } from './Navigation/Navigation';
import { User } from './User/User';
import { LogOut } from './LogOut/LogOut';

export const Sidebar = (  { setIsLoggedIn }) => {
    return (
        <aside className='sidebar'>
            <section className="sidebarTop">
                <User />
                <Navigation />
            </section>
            <LogOut setIsLoggedIn={setIsLoggedIn}/>
        </aside>
    )
}
