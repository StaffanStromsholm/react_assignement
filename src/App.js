import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import './App.css';
import Posts from './Components/Posts/Posts';
import AddPost from './Components/AddPost/AddPost';
import axios from 'axios';
import Header from './Components/Header/Header';
import SinglePost from './Components/SinglePost/SinglePost.js';
import Welcome from './Components/Welcome/Welcome';
import Aside from './Components/Aside/Aside';
import EditPost from './Components/EditPost/EditPost';

// fetching data from fake json server hosted on my-json-server.typicode.com, posting to this db does not work, use localhost for that
const DB = 'https://my-json-server.typicode.com/StaffanStromsholm/react-assignement-db/posts';

const localhostDB = 'http://localhost:3001/posts';

const App = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    imgUrl: '',
    description: ''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [posts, setPosts] = useState([]);

  const history = useHistory();

  let { path, url } = useRouteMatch();

  useEffect(() => {
    axios
      .get(DB)
      .then(result => setPosts(result.data))
  }, []);

  const onChangeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.post(DB, post)
      .then(() => {
        return axios.get(DB)
      })
      .then(result => {
        setPosts(result.data);
        alert('New post was succesfully created');
        history.push("/react_assignement/posts");
      });
  };

  const onSubmitHandlerEdit = (e) => {
    e.preventDefault();
    axios.put(DB, post)
    .then(()=>axios.get(DB))
  }

  const setLoggedInToFalseHandler = () => {
    setIsLoggedIn(false);
  };

  const setLoggedInToTrueHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">

      <Header isLoggedIn={isLoggedIn} logoutHandler={setLoggedInToFalseHandler} loginHandler={setLoggedInToTrueHandler} />

      <Switch>
      <Route exact path={`/react_assignement`}>
      {/* passing functions as props to handle state from child component Welcome to parent Component App */}
        <Welcome logoutHandler={setLoggedInToFalseHandler} loginHandler={setLoggedInToTrueHandler} isLoggedIn={isLoggedIn} />
      </Route>
        <Route path={`/react_assignement/post/:postID`}>
          <SinglePost />
        </Route>
        <Route path={`/react_assignement/editpost/:postID`}>
          <EditPost onChangeHandler={onChangeHandler} onSubmitHandlerEdit={onSubmitHandlerEdit} />
        </Route>
        <Route path={`/react_assignement/posts`} >
          <Posts posts={posts} />
          <Aside />
        </Route>
        <Route path={`/react_assignement/newpost`}>
          <AddPost onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </Route>
      </Switch>

    </div>
  );
};

export default App;
