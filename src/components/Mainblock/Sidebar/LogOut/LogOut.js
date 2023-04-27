import React from 'react';
import './LogOut.css';

// svg Передаем как компонент ↓
import { ReactComponent as ArrowLeftIcon } from '../../../../assets/images/left-arrow.svg';

export const LogOut = ( { setIsLoggedIn } ) => {

    /* const logOut = () => setIsLoggedIn(false) */

    return (
        <section className="sidebarBottom">
            <button>
            <ArrowLeftIcon height={25} width={25}/>
                <span onClick={()=>setIsLoggedIn(false)}>Выход</span>
                {/* <span onClick={logOut}>Выход</span> */} {/* Либо таким способом */}
            </button>
        </section>
    )
}
