import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.clear('token')
        navigate('/login')
    }, [navigate])
}

export default Logout;