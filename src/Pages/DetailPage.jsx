import React from 'react'
import { Link } from "react-router-dom"
import SingleBlogPage from './SingleBlogPage'
import { useNavigate } from 'react-router-dom'



const DetailPage = () => {
    const Navigate=useNavigate()
    const GoBack=()=>{
        Navigate(-1)
    }

    return (
        <div className='main'>
        <SingleBlogPage/>
        <button className='mystyle' onClick={GoBack}></button>
        <Link to="/"> <button className='mystyle' ></button> </Link>
        </div>
    )
}

export default DetailPage;