import { useState, useEffect } from 'react'
import { getComments } from '../utilities/books-api.js';
import CreateCommentForm from '../components/CreateCommentForm.jsx'
import CommentList from '../components/CommentList.jsx'

export default function HomePage() {
  const [comments, setComments] = useState(null);

  useEffect(() => {
   
    getComments().then(data => 
      setComments(data)
    )
  }, [])

  return (
    <div>
        <CreateCommentForm setComments={setComments} />
        <CommentList comments={comments} />
    </div>
  )
}
