import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:3001/posts')
        .then(result => setPosts(result.data))
    });

    return (
        <div>
            {posts.map((post, i) => <div key={i}>{post.title} {posts.author} {post.description}</div>)}
        </div>
    )
}

export default Posts;