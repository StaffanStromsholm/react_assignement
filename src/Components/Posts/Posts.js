import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Posts.css'

function Posts({posts}) {

    return (
        <div>
            {posts.map((post, i) => <div className="postCard" key={i}><h2>{post.title}</h2> <h3><em>{post.author}</em></h3> <p>{post.description}</p></div>)}
        </div>
    )
}

export default Posts;