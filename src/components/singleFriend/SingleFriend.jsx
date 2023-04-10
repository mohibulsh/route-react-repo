import React from 'react';
import './singleFriend.css'
import { Link } from 'react-router-dom';
const SingleFriend = ({friend}) => {
    const {name,phone,email,id}=friend;
    return (
        <div className='friendContainer'>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
            <p><Link to={`/friend/${id}`}>show me details</Link></p>
        </div>
    );
};

export default SingleFriend;