import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCommentByID, editComment } from '../utilities/books-api.js';

export default function EditCommentPage() {
    const [comment, setComment] = useState(null)
    const {id} = useParams()
    const nav = useNavigate()

    // useEffect(() => {
    //     getCommentByID(id).then(res => {
    //       console.log(res.data);
    //       setComment(res.data)
    //     )}
    // }, []);

    useEffect(() => {
    getCommentByID(id).then(res => {
        console.log(res.data); 
        setComment(res.data);
    });
}, [id]); 
  
    const editTheComment = (e) => {
        e.preventDefault()
        const comment = {
            content: e.target.content.value,
            username: e.target.username.value,
            rating: e.target.rating.value,
        }
        editComment(id, comment).then(() =>{nav(`/${id}`)})

        
    }
  return (
    <>
    <div>Edit Comment</div>
    { comment && <form onSubmit={editTheComment}>
      Content: <input type='text' name='content' defaultValue={comment.content}></input><br/>
      Username: <input type='text' name='username' defaultValue={comment.username}></input><br/>
      Rating: <input type='number' name='rating' defaultValue={comment.rating}></input><br/>
      <input type='submit'></input>
    </form> }
    </>
  )
}


