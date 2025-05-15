import { useState, useEffect } from 'react'
import { getComments } from '../utilities/books-api.js';

import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar.jsx'

export default function HomePage() {
  
  const [comments, setComments] = useState([]);
  // const nav = useNavigate()

  useEffect(() => {
    
    getComments().then(data => setComments(data))
  }, [])

  return (
    <>
    <NavBar />
      
     
      <h2>All Commnets</h2>
      <div>
        <ul>
          {comments.map((comment) => (
            <li>
              <p>
              <Link to={`/${comment._id}`}>{comment.username}</Link> <br />
              {comment.content}<br />
              {comment.rating}<br />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
