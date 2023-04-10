import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../singlePost/SinglePost';

const Poster = () => {
    const posts =useLoaderData();
    return (
        <div>
            <h4>this is a poster</h4>
            <div>
                {
                    posts.map(ps=><SinglePost
                    key={ps.id}
                    post={ps}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Poster;