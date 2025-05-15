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
      
     
      <h2 className="comment-title">Book Reviews</h2>
      <div className="comment-container">
        <ul className="comment-list">
          {comments.map((comment) => (
            <li className="comment-item">
              <p>
               Username: {comment.username} <br />
              <Link to={`/${comment._id}`}>Reviews: </Link>{comment.content}<br />
              Ratings: {comment.rating}<br />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
    
  );
}
