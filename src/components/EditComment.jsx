//  import { useEffect, useState} from 'react';
 
// import { getCommentByID } from '../utilities/books-api';
 

 
//  export default function EditComment( {comment, setComment} ) {
//      const [formData, setFormData] = useState(null)
 
//      function handleChange(e) {
//          setFormData({
//              ...formData,
//              [e.target.name]: e.target.value
//          })
//      }

//     //  useEffect(() => {
//     //      getCommentByID(id).then(
//     //         setComment
//     //  }
//     // ) 
//  async function handleSubmit(e) {
//      e.preventDefault();
//      try {
//          const response = await fetch ('http://localhost:3000/comments/${id}', {
//              method: "PUT",
//              headers: {'Content-Type': 'application/json' },
//              body: JSON.stringify(formData)
//          });
//          const data = await response.json();
//         //  const comment = await getCommentByID();
//          setComment(data)
//          console.log(data)
//      } catch (error) {
//          console.error(error)
//      }
//  }
 
//    return (
//      <form onSubmit={handleSubmit}>
//          <input type="text" placeholder='Enter Username' name='username' value={formData.username} onChange={handleChange} />
//          <input type="text" placeholder='Enter Comments' name='content' value={formData.content} onChange={handleChange} />
//          <input type="number" placeholder='Enter rating 1 to 5' min='1' max='5' name='rating' value={formData.rating} onChange={handleChange} />
//          <input type="submit" />
 
 
 
 
 
//      </form>
//    )
//  }
 