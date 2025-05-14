import { useState, useEffect } from 'react'
import { getComments } from '../utilities/books-api.js';
import { getPosts } from '../utilities/books-api.js';
import { Link, useNavigate } from 'react-router-dom'
import PostList from '../components/PostList.jsx'
import CommentList from '../components/CommentList.jsx'

export default function HomePage() {
 const [posts, setPosts] = useState(null);
   const [comments, setComments] = useState(null);
   const nav = useNavigate()
   
     useEffect(() => {
      getPosts().then(data => setPosts(data))
       getComments().then(data => setComments(data))
     }, [])
   
     return (
       <div>
        <h2>All Posts</h2>
        <PostList posts={posts} />

          <h2>All Commnets</h2>
          <CommentList comments={comments} />
       </div>
     )
  
}
