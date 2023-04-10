import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './details.css'
const ShowDetail = () => {
    const details =useLoaderData();
    const {title,body}=details;
    const navigate = useNavigate();
    const goBackHandler = () =>{
          navigate(-1)
    }
    return (
        <div className='details'>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={goBackHandler}>go back</button>
        </div>
    );
};

export default ShowDetail;