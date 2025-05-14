// import { useState, useEffect } from 'react'
// import { useParams } from "react-router-dom"
// import { getCommentByID } from '../utilities/books-api.js';
// import EditComment from '../components/EditComment.jsx'

// export default function EditCommentPage() {
//   const [comment, setComment] = useState(null);
//   const {id} = useParams()
  
// //https://hygraph.com/blog/routing-in-react
  
//    useEffect(() => {
//    if (id) {
//     getCommentByID(id)
//     .then(data => setComment(data))
//     .catch((error) => console.error(error))
  
//   }
//   }, [id])

    // const editTheCommnet = (updatedComment) => {
    //   //updatedComment.preventDefault()
    //   editComment(id, updatedComment );

    //   Navigate('/${id}')
    // }
//   return (
//     <div>
//       <h2>Edit Comment</h2>
//        <form onSubmit={handleSubmit}>
//          <input type="text" placeholder='Enter Username' name='username' value={formData.username} onChange={handleChange} />
//          <input type="text" placeholder='Enter Comments' name='content' value={formData.content} onChange={handleChange} />
//          <input type="number" placeholder='Enter rating 1 to 5' min='1' max='5' name='rating' value={formData.rating} onChange={handleChange} />
//          <input type="submit" />

//      </form>
//     </div>
//   )
// }


//////////
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


