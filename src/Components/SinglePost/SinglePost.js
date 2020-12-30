import React from 'react'
import { useParams } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = () => {
    let { postID } = useParams();
    return (
        <div className="SinglePost">SinglePost {postID}</div>
    )
}

export default SinglePost
