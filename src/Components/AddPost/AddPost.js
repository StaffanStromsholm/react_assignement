import React from 'react'
import './AddPost.css';

function AddPost({onChangeHandler, onSubmitHandler}) {

    return (
        <form className="addPost" onSubmit={onSubmitHandler}>
        <div className="form-group">
            <label htmlFor="title">title</label>
            <input name="title" onChange={onChangeHandler} type="text" id="title"></input>
        </div>
        <div className="form-group">
            <label htmlFor="author">Author</label>
            <input name="author" onChange={onChangeHandler} type="text" id="author"></input>
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" onChange={onChangeHandler} type="text" id="description" rows="10" cols="50"></textarea> 
            <button type="submit">Submit</button>
        </div>
            
        </form>
    )
}

export default AddPost
