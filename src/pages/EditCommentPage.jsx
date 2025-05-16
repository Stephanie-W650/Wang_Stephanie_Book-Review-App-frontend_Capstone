import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCommentByID, editComment } from '../utilities/books-api.js';

export default function EditCommentPage() {
  const [comment, setComment] = useState(null)
  const { id } = useParams()
  // useNavigate hook to navigate after editing the comment
  const nav = useNavigate()

//useEffect hook that fetches the comment data by its ID when the id changes
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
    editComment(id, comment).then(() => { nav(`/${id}`) })


  }
  return (
    <>
      <h2>Edit Review</h2>
      {comment && <form onSubmit={editTheComment} className="create-comment-form">
        <input className="form-content" type='text' name='content' defaultValue={comment.content}></input><br />
        <input className="form-content" type='text' name='username' defaultValue={comment.username}></input><br />
        <input className="form-content" type='number' name='rating' min='1' max='5' defaultValue={comment.rating}></input><br />
        <input id="review-submit-button" type='submit'></input>
      </form>}
    </>
  )
}


