import React from 'react'
import './AddPost.css';

function AddPost({onChangeHandler}) {

    return (
        
        <form>
        <div className="form-group">
            <label htmlFor="author">Author</label>
            <input onChange={onChangeHandler} type="text" id="author"></input> 
        </div>
            
        </form>
    )
}

export default AddPost
