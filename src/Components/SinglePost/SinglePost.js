import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SinglePost.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


const dbEndpoit = 'http://localhost:3001/posts';

const SinglePost = () => {
    const [post, setPost] = useState({});
    const [error, setError] = useState();
    let { postID } = useParams();

    useEffect(() => {
        axios.get(dbEndpoit)
            .then(result => result.data.find(post => post.id == postID))
            .then(result => setPost(result))
    }, []);

    return (
        <div className="SinglePost-container">
            <Card className="SinglePost-card" style={{ width: '900px' }}>
                <Card.Img className="SinglePost-img" variant="top" src={post.imgUrl} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.description}
                    </Card.Text>
                    <Link className="edit" to="/">Edit</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SinglePost