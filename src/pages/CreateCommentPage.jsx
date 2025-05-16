import { useState, useEffect } from 'react'
import { getComments } from '../utilities/books-api.js';
import CreateCommentForm from '../components/CreateCommentForm.jsx'
import CommentList from '../components/CommentList.jsx'

export default function CreateCommentPage() {
  const [comments, setComments] = useState(null);
//useEffect hook to fetch the comments when the component is initial loaded
  useEffect(() => {
   
    getComments().then(data => 
      setComments(data)
    )
  }, []) // The empty dependency array ensures this effect runs only once


  return (
    <div>
        <CreateCommentForm setComments={setComments} />
        <CommentList comments={comments} />
    </div>
  )
}
