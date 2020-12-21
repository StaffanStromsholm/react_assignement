import React from 'react'
import './AddPost.css';

function AddPost({onChangeHandler, onSubmitHandler}) {

    return (
        
        <form onSubmit={onSubmitHandler}>
        <div className="form-group">
            <label htmlFor="title">title</label>
            <input name="title" onChange={onChangeHandler} type="text" id="title"></input>
        </div>
        <div className="form-group">
            <label htmlFor="author">Author</label>
            <input name="author" onChange={onChangeHandler} type="text" id="author"></input>
        </div>
        <div className="form-group">
            <label htmlFor="description">Author</label>
            <input name="description" onChange={onChangeHandler} type="text" id="description"></input> 
            <button type="submit">Submit</button>
        </div>
            
        </form>
    )
}

export default AddPost
