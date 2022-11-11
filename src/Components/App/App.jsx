import React, { useEffect } from 'react'
import Login from '../Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Error from '../Error/Error';
import Logout from '../Logout/Logout';
import Single from '../Single/Single';

const App = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<Error />} />
            <Route path='/:url' element={<Header />} />
            <Route path='/:url/:id' element={<Single />} />
            <Route index path='/' element={<Header />} />
        </Routes>
    )
}

export default App