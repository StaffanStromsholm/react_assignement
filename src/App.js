import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import './App.css';
import Posts from './Components/Posts/Posts';
import AddPost from './Components/AddPost/AddPost';
import axios from 'axios';
import Header from './Components/Header/Header'
import SinglePost from './Components/SinglePost/SinglePost.js';
import BlogCard from './Components/BlogCard/BlogCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


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
        history.push("/");
      })
  }

  const PostList = posts.map((p, id) => {
    return (
      <Card>
        <Card.Img variant="top" src={p.imgUrl} />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
          <Card.Text>
            {p.description}
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted by {p.author}</small>
        </Card.Footer>
        
      </Card>
    )
  })

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path={`/posts/:postID`}>
          <SinglePost />
        </Route>
        <Route path="/posts" > <div className="posts" >{PostList}</div></Route>
        <Route path="/newpost">
          <AddPost onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
