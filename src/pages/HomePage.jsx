import { useState, useEffect } from 'react'
import { getComments } from '../utilities/books-api.js';
import { getPosts } from '../utilities/books-api.js';
import { Link, useNavigate } from 'react-router-dom'
import PostList from '../components/PostList.jsx'


export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const nav = useNavigate()

  useEffect(() => {
    getPosts().then(data => setPosts(data))
    getComments().then(data => setComments(data))
  }, [])

  return (
    <>
      <h2>All Posts</h2>
      <PostList posts={posts} />

      <h2>All Commnets</h2>

      <div>

        <ul>
          {comments.map((comment) => (


            <li>
              <p>
                <Link to={`/${comment._id}`}>{comment.username}</Link> <br />{comment.content}<br />{comment.rating}<br />
              </p>
            </li>
          ))}

        </ul>

      </div>
    </>
  );
}
