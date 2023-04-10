import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const data = useLoaderData();
    const {name,username,email}=data;
    return (
        <div>
            <h4>there have friend details</h4>
            <h4>Name : {name}</h4>
            <p> Email : {email}</p>

        </div>
    );
};

export default FriendDetails;