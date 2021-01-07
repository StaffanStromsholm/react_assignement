import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Posts.css'

const Posts = ({posts}) => {
    return(
        posts.map((p) => {
            return createBlogCard(p);
          })
    )
}

const createBlogCard = (p) => {
    return(
        <Card className="posts-card" key={p.id}>
          <Link to={`posts/${p.id}`}><Card.Img variant="top" src={p.imgUrl} /></Link>
          <Card.Body>
            <Card.Title>{p.title}</Card.Title>
            <Card.Text>
              {/* truncate text */}
              {p.description.substring(0, 200)}...
            </Card.Text>
            <Link className="read-more" to={`posts/${p.id}`}>Read more</Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Posted by {p.author}</small>
          </Card.Footer>
        </Card>
      )
}

const PostsWrappedInDiv = ({posts}) => {
    return <div className="posts"><Posts posts={posts} /></div>
}

export default PostsWrappedInDiv;