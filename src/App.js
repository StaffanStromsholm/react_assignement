import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import './App.css';
import Posts from './Components/Posts/Posts';
import AddPost from './Components/AddPost/AddPost';
import axios from 'axios';
import Header from './Components/Header/Header'
import SinglePost from './Components/SinglePost/SinglePost.js';
import Welcome from './Components/Welcome/Welcome';
import Aside from './Components/Aside/Aside';

const API = 'http://localhost:3001/posts';

const App = () => {

  const [post, setPost] = useState({
    title: '',
    author: '',
    imgUrl: '',
    description: ''
  })

  const [posts, setPosts] = useState([]);

  const history = useHistory();

  let { path, url } = useRouteMatch();

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
        history.push("/posts");
      })
  }

  return (
    <div className="App">
      <Header />

      <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
        <Route path={`/posts/:postID`}>
          <SinglePost />
          <Aside />
        </Route>
        <Route path="/posts" >
          <Posts posts={posts} />
          <Aside />
        </Route>
        <Route path="/newpost">
          <AddPost onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
