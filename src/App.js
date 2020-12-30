import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import './App.css';
import Posts from './Components/Posts/Posts';
import AddPost from './Components/AddPost/AddPost';
import axios from 'axios';
import Header from './Components/Header/Header'
import SinglePost from './Components/SinglePost/SinglePost.js';

const API = 'http://localhost:3001/posts';

const App = () => {

  const [post, setPost] = useState({
    title: '',
    author: '',
    description: ''
  })

  const [posts, setPosts] = useState([]);

  const history = useHistory();

  let {url, path} = useRouteMatch();

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
      .then(() => {
        return axios.get(API)
      })
      .then(result => {
        setPosts(result.data);
        alert('New post was succesfully created');
        history.push("/");
        
      })


  }

  return (
    <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact>
            <Posts posts={posts} />
          </Route>
          <Route path="/newpost">
            <AddPost onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
          </Route>
          <Route path={`${path}/:postID`}>
        <SinglePost />
          </Route>
        </Switch>

    </div>
  );
}

export default App;
