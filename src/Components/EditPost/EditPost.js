import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EditPost.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditPost = ({ onChangeHandler, onSubmitHandlerEdit }) => {
    const [post, setPost] = useState({});
    let { postID } = useParams();

    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/StaffanStromsholm/react-assignement-db/posts/' + postID)
        .then(result => setPost(result.data))
    }, [])

    return (
        <div className="addPost">

        <h2 className="newpost-title">Create New Post</h2>

        <Form onSubmit={onSubmitHandlerEdit}>

            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control value={post.title} name="title" required onChange={onChangeHandler} type="text" placeholder={post.title}/>
            </Form.Group>
            <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control name="author" required onChange={onChangeHandler} type="text" placeholder="Author" />
            </Form.Group>
            <Form.Group controlId="imgUrl">
                <Form.Label>Image Url</Form.Label>
                <Form.Control name="imgUrl" required onChange={onChangeHandler} type="text" placeholder="Image Url" />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Text</Form.Label>
                <Form.Control name="description" required onChange={onChangeHandler} as="textarea" rows={3} />
            </Form.Group>
            <Button variant="success" type="submit">Add</Button>
            <Button variant="primary" className="new-post-back-btn" type="button"><Link to="/react_assignement/posts">Back</Link></Button>

        </Form>
        
    </div>
    
    );
};

export default EditPost;
