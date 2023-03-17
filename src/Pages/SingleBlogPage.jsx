import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleBlogPage = () => {
    const location = useLocation();
    const { title, img, description } = location.state;
    // console.log(title)
    return (
        <div className='single__page'>
            <img src={img} alt="" /> <br />
            <h1>{title}</h1> <br /> <br />
            <p>{description}</p> <br /> <br />
        </div>
    )
}

export default SingleBlogPage;