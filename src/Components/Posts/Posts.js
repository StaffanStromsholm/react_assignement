import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import './Posts.css'
import BlogCard from '../BlogCard/BlogCard'

function Posts({posts}) {
    let {url, path} = useRouteMatch();

    return (
        <div className="posts">
            {posts.map((post, i) => (
                <BlogCard link={`${url}/posts/${post.id}`} title={post.title} author={post.author} description={post.description} key={i} />
                ) 
            )}
        </div>
    )
}

export default Posts;