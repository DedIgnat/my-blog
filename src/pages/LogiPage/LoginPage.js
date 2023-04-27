import React from 'react'
import './LoginPage.css'

export const LoginPage = ( { setIsLoggedIn } ) => {

    const logIn = () => setIsLoggedIn(true)

    return (

        <form onSubmit={logIn} className='loginForm'>
        {/* <form onSubmit={()=> setIsLoggedIn(true)} className='loginForm'> */} {/* Либо таким способом */}
            <h1>Вход</h1>
            <div>
                <input type="text" placeholder='login' name='login' required/>
            </div>
            <div>
                <input type="password" placeholder='password' name='password' required/>
            </div>
            <div>
                <button type='submit'>Enter</button>
            </div>
        </form>
    )
}
