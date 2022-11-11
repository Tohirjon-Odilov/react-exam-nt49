import React from 'react'
import './Error.scss'
import errorLogo from './../../assets/Error.png'

const Error = () => {
    return (
        <div className='Error'>
            <img src={errorLogo} alt="{Error image}" />
            <h1>Page not found - 404</h1>
            <p>This page not found (deleted or never exists).Try a phrase in search box or back to home and start again.</p>
            <span>TAKE ME HOME!</span>
        </div>
    )
}

export default Error;