import React from 'react'
import './BlogCard.css';
import {Link} from 'react-router-dom';

function BlogCard({title, author, description, link}) {
    return (
        <div className="BlogCard">
            <h2>{title}</h2>
            <h3><em>{author}</em></h3>
            <p>{description}</p>
            <Link to={link}><button> Read More </button></Link>
        </div>
    )
}

export default BlogCard
