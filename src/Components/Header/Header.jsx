import React, { useRef, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Text from '../Text/Text'
import logoLight from './../../assets/logo_light.png'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../redux/features/categorySlice';
import { Link } from 'react-router-dom'


const Header = () => {
    const { category, status } = useSelector((state) => state.category);

    // Search category

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])
    console.log(status)


    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive')
    }

    const [searchFilter, setSearchFilter] = useState("");


    return (
        <div className='header'>
            <main className='main'>
                <nav>
                    <div className="header">
                        <div className="header-left">
                            <img src={logoLight} alt="{logo image}" className='left__img' />
                            <span className='bar__btn' onClick={showNavbar}><i className="fa-solid fa-bars"></i></span>
                        </div>
                        <div ref={navRef} className="header-middle">
                            <span className='close__btn' onClick={showNavbar}><i className="fa-solid fa-xmark"></i></span>
                            {status === 'panding' && <div>loading...</div>}
                            {category.length > 0 && category.slice(0, 4).map((item) => {
                                const { id, name } = item;
                                return (
                                    <React.Fragment key={id}>
                                        <Link to={`/${name}`}>{name}</Link>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="nav-right">
                        <input type="text" placeholder={'Enter the search..'} onChange={(event => setSearchFilter(event.target.value))} />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </nav >
                <Text searchFilter={searchFilter} />
            </main>
            <Footer />
        </div>
    )
}

export default Header