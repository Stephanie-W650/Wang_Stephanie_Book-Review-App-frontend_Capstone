import { useState } from 'react';
import { getComments } from '../utilities/books-api';


export default function CreateCommentForm( {setComments} ) {
    const [formData, setFormData] = useState({
        username: '',
        content: '',
        rating: ''
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await fetch ('http://localhost:3000/comments', {
            method: "POST",
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        const comments = await getComments();
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
