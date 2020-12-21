import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import AddPost from './Components/AddPost/AddPost';
import axios from 'axios';

const API = 'http://localhost:3001/posts';

function App() {

  const [post, setPost] = useState({
    title: '',
    author: '',
    description: ''
  })

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then(result => setPosts(result.data))
  }, []);

  const onChangeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.post(API, post)
    .then(()=> {
      return axios.get(API)
    })
    .then(result=>setPosts(result.data));
  }
  return (
    <div className="App">
      <Posts posts={posts} />
      <AddPost onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
    </div>
  );
}

export default App;
