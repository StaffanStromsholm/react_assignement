import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Posts.css'

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:3001/posts')
        .then(result => setPosts(result.data))
    }, []);

    return (
        <div>
            {posts.map((post, i) => <div className="postCard" key={i}><h2>{post.title}</h2> <h3><em>{post.author}</em></h3> <p>{post.description}</p></div>)}
        </div>
    )
}

export default Posts;