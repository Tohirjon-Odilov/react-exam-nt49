import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as dayjs from 'dayjs'
import './Single.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Single = () => {
    const { posts } = useSelector((state) => state.post)
    console.log('nimadur', posts)

    const { id } = useParams()
    return (
        <>
            {/* <Header /> */}
            <section className="singlePage-section">
                <div className="container">
                    {<div className="singlePage">
                        <div className="singlePage__body">
                            <h3 className="singlePage__title">
                                {posts[id].title}
                            </h3>
                            <p className="singlePage__decsription">
                                {posts[id].description}
                            </p>
                            <div className="singlePage__time-wrapper">
                                <time>{`${dayjs(posts.createdAt).format('MMMM DD.YYYY')}`}</time>
                                <span>{posts[id].readTime} minutes read</span>
                            </div>
                            <img src={posts[id].image} alt={posts[id].title} />
                            <div className="singlePage__main-text">
                                {posts[id].content}
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </section>
            {/* <Footer /> */}
        </>
    )
}

export default Single