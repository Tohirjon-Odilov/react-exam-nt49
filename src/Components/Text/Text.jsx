import React, { useEffect, useState } from 'react'
import './Text.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/features/postSlice';
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as dayjs from 'dayjs'




const Text = ({ searchFilter }) => {
    const navigate = useNavigate();
    const { url } = useParams();
    const [id, setId] = useState(1);

    const { posts } = useSelector((state) => state.post);
    const dispatch = useDispatch();


    useEffect(() => {
        fetch(`https://63566a79a2d1844a97742c99.mockapi.io/category/${id}/posts`)
            .then((response) => response.json())
            .then((post) => {
                dispatch(addPost(post))
            })
    }, [id, dispatch])

    useEffect(() => {
        if (url === 'tenetur' || url === 'not found' || url === 'undefined') {
            setId(1)
            navigate('/tenetur')
        } else if (url === 'laudantium') {
            setId(2)
        } else if (url === 'placeat') {
            setId(3)
        } else if (url === 'corrupti') {
            setId(4)
        } else {
            console.log("nomalum ma'lumot")
            navigate('not found')
        }
    }, [url, setId, navigate])




    return (
        <div className="content">
            {/* content left */}
            <div className="content__left">
                <h2>What I do!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                <span>Explore me </span>
                <div className="social__link">
                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                    <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://ru.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            {/* content right */}
            <div className="content__right">
                <h1>Recent Posts</h1>

                {/* content card */}
                {posts.length > 0 && posts.filter((value) => {
                    if (searchFilter === '') {
                        return value
                    }
                    else if (value.title.toLowerCase().includes(searchFilter.toLowerCase())) {
                        return value;
                    }
                }).map((item) => {
                    const { id, createdAt, title, description } = item;
                    return (
                        <Link to={`${id}`} onClick={() => navigate(`/${url}/${id}`)} className="content__card" key={id}>
                            <div className="span__text">
                                <span>September <time>{`${dayjs(posts.createdAt).format('MMMM DD.YYYY')}`}</time> </span>
                                <span>{url}</span>
                            </div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <span className='time__photo'>{new Date().getUTCSeconds(createdAt)} minutes read</span>
                            <hr />
                        </Link>
                    )
                })}

                <div className="content__pagenation">
                    <p>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Text;