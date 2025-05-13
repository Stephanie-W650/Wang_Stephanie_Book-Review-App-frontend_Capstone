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
        
    }
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Username' name='username' value={formData.username} onChange={handleChange} />
        <input type="text" placeholder='Enter Comments' name='content' value={formData.content} onChange={handleChange} />
        <input type="number" placeholder='Enter rating 1 to 5' min='1' max='5' name='rating' value={formData.rating} onChange={handleChange} />
        <input type="submit" />





    </form>
  )
}
