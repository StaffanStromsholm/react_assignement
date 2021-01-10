import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SinglePost.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = ({post}) => {
    return (
        <div className="SinglePost-container">
        <Card className="SinglePost-card" style={{ width: '900px' }}>
            <Card.Img className="SinglePost-img" variant="top" src={post.imgUrl} />
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.description}
                </Card.Text>
                <Link className="back-btn" to="/react_assignement/posts">Back</Link>
            </Card.Body>
        </Card>
    </div>
    )
}

const SinglePost = () => {
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let { postID } = useParams();

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/StaffanStromsholm/react-assignement-db/posts/' + postID)
            .then(result => {
                setPost(result.data);
                setIsLoading(false);
            } );  
    }, []);

    let postData = undefined;

    if(isLoading){
        postData = <h2 className="loading">Loading...</h2>;
    }

    if(!isLoading){
        postData = <Post post={post} />;
    }

    return (
        <>{postData}</>
    );
};

export default SinglePost;