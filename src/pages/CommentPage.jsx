import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom' 
import {getCommentByID, deleteComment } from '../utilities/books-api.js'

export default function CommentPage() {
  const nav = useNavigate()
  const [Comment, setComment] = useState({})
  const {id} = useParams()

  useEffect(() => {
   getCommentByID(id)
    .then(res => setComment(res.data) )
  }, [])

  const deleteTheComment = () => {
    deleteComment(id).then(() => {nav('/')})
  }
  
  return (
    <div>
      <h2>Book Comments</h2>
      <h3>content: {Comment.content}</h3>
      <h3>username: {Comment.username}</h3>
      <h3>Rating:  {Comment.rating}</h3>
      <br />
      <button onClick= {() => {nav('/')}}>Go Back to Posts and Comments</button>
       <button onClick= {() => {nav('/createcomment')}}>Create a new Comment</button>
      <button onClick={()=>{nav(`/edit/${id}`)}}>Edit Comment</button>
      <button onClick={deleteTheComment}>Delete this Comment</button>
      
    </div>
  )
}
