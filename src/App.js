import './App.css';
import Posts from './Components/Posts/Posts';
import AddPost from './Components/AddPost/AddPost';

function App() {
  const onChangeHandler = () => {
    console.log('here');
  }
  return (
    <div className="App">
  <Posts />
  <AddPost onChangeHandler={onChangeHandler} />
    </div>
  );
}

export default App;
