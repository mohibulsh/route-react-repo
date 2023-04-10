import React from 'react';
import './siglePost.css'
import { Link, useNavigate } from 'react-router-dom';
const SinglePost = ({post}) => {
    const {id,title,userId} =post;
    const navigate =useNavigate();
    const btnHandler = () =>{
          navigate(`/showDetails/${id}`)
    }
    return (
        <div className='post'>
            <h2>userId:{userId}</h2>
            <h3>{title}</h3>
            <p>
                <Link to={`/showDetails/${id}`}>show details</Link>
            </p>
            <button onClick={btnHandler}>show me details</button>
        </div>
    );
};

export default SinglePost;