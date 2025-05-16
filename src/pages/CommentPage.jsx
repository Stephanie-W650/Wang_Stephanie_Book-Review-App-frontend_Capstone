import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom' 
import {getCommentByID, deleteComment } from '../utilities/books-api.js'

export default function CommentPage() {
  const nav = useNavigate()
  const [Comment, setComment] = useState({})
  const {id} = useParams()
// useEffect hook to fetch the comment data when id changes or first loaded
  useEffect(() => {
   getCommentByID(id)
    .then(res => setComment(res.data) )
  }, [])
  // Function to delete the comment
  const deleteTheComment = () => {
  // Calling the deleteComment function and navigating to the home page after deletion
    deleteComment(id).then(() => {nav('/')})
  }
  
  return (
    <div className="CommentPage">
      <h2>Book Review</h2>
      <div className="CommentPage-titles">
      <p>Review: {Comment.content}</p>
      <p>username: {Comment.username}</p>
      <p>Rating:  {Comment.rating}</p></div>
      <br />
      <button onClick= {() => {nav('/')}}>Home Page</button>
      <button onClick= {() => {nav('/createcomment')}}>Create Review</button>
      <button onClick={()=>{nav(`/edit/${id}`)}}>Edit Review</button>
      <button onClick={deleteTheComment}>Delete Review</button>
      
    </div>
  )
}
