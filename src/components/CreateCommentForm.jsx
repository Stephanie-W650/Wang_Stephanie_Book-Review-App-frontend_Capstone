import { useState } from 'react';
import { getComments } from '../utilities/books-api';

// the base URL where the comments will be posted to
const baseURL= 'https://wang-stephanie-book-review-app-backend.onrender.com/comments'

export default function CreateCommentForm( {setComments} ) {
    const [formData, setFormData] = useState({
        username: '',
        content: '',
        rating: ''
    })
// handle changes to form fields
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

// submit the form to create a new comment     
async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await fetch (baseURL, {
//sending a POST request to the backend to save the new comment
            method: "POST",
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        //fetch the updated comments from backend
        const comments = await getComments();
        //update the state with the new comments
        setComments(comments)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

  return (
<>
    <h2>Create A Review</h2>
    <form onSubmit={handleSubmit} className="create-comment-form">
        <div className="form-content">
       
        <input type="text" placeholder='Enter Username' name='username' value={formData.username} onChange={handleChange} /> <br /></div>
        <div className="form-content">
           
        <input type="text" placeholder='Your Reviews' name='content' value={formData.content} onChange={handleChange} /><br /></div>
        <div className="form-content">
          
        <input type="number" placeholder='Enter rating 1 to 5' min='1' max='5' name='rating' value={formData.rating} onChange={handleChange} /><br /></div>
        <div><input id="review-submit-button" type="submit" /></div>





    </form>
    </>
  )
}
