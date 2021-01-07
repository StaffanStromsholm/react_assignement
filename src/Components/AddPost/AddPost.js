import React from 'react'
import './AddPost.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddPost({ onChangeHandler, onSubmitHandler }) {

    return (<div className="addPost">

        <h2 className="newpost-title">Create New Post</h2>

        <Form onSubmit={onSubmitHandler}>

            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" required onChange={onChangeHandler} type="text" placeholder="Title" />
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
            <Button variant="primary" type="submit">
                Add
            </Button>

        </Form>
        
    </div>
    )
}

export default AddPost
