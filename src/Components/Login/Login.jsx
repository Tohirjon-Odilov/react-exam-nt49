import React, { useState } from 'react'
import logoLight from './../../assets/logo_light.png'
import './Login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState('')

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const formHandler = (e) => {
        e.preventDefault()

        console.log({ email, password })
        axios.post('https://reqres.in/api/login', {
            email,
            password
        })
            .then(res => {
                console.log(res.data)
                // alert('success')
                localStorage.setItem('token', res.data.token)
                navigate('/')
            })
            .catch(error => {
                alert('error')
                console.log(error)
            })
    }

    return (
        <div className='Login'>
            {/* navbar */}
            <nav>
                <div className="nav__content">
                    <img src={logoLight} alt="{logo image}" className='nav__img' />
                </div>
            </nav>
            {/* middle */}
            <div className="login__content">
                <h1>Sahifamga xush kelibsiz! Pulli kontentni o’qish <br /> uchun tizimga kiring.</h1>
            </div>

            <form onSubmit={formHandler}>
                <h1>Login</h1>
                <input type="text" placeholder='email' value={email} onChange={handleEmail} />
                <input type="password" placeholder='password' value={password} onChange={handlePassword} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;