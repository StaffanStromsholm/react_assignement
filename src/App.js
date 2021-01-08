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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [posts, setPosts] = useState([]);

  const history = useHistory();

  let { path, url } = useRouteMatch();

  useEffect(() => {
    axios
      .get(API)
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

  const setLoggedInToFalseHandler = () => {
    setIsLoggedIn(false);
  }

  const setLoggedInToTrueHandler = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />

      <Switch>
      <Route exact path="/">
      {/* passing functions as props to handle state from child component Welcome to parent Component App */}
        <Welcome loginFalseHandler={setLoggedInToFalseHandler} loginTrueHandler={setLoggedInToTrueHandler} isLoggedIn={isLoggedIn} />
      </Route>
        <Route path={`/post/:postID`}>
          <SinglePost />
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
