// import React, {useEffect, useState} from 'react';
// import { useRouteMatch } from 'react-router-dom';
// import './Posts.css'
// import BlogCard from '../BlogCard/BlogCard'

// function Posts({posts}) {
//     let {url} = useRouteMatch();

//     return (
//         <div className="posts">
//             {posts.map((post, i) => (
//                 <BlogCard link={`${url}/${post.id}`} title={post.title} imgUrl={post.imgUrl} author={post.author} description={post.description} key={i} />
//                 ) 
//             )}
//         </div>
//     )
// }

// export default Posts;