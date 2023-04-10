import React from 'react';
import { useLoaderData } from 'react-router-dom'
import SingleFriend from '../singleFriend/SingleFriend';
const Friends = () => {
    const friends=useLoaderData();
    
    return (
        <div>
            <h4>these are my friends</h4>
            <div>
                {
                    friends.map(friend=><SingleFriend
                    key={friend.id}
                    friend={friend}></SingleFriend> ) 
                   
                }
            </div>
        </div>
    );
};

export default Friends;