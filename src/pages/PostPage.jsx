import { useState, useEffect } from 'react'
import { getPosts } from '../utilities/books-api.js';
import PostList from '../components/PostList.jsx'


export default function PostPage() {
    const [posts, setPosts] = useState([]);



    useEffect(() => {
        getPosts().then(data => setPosts(data))

    }, [])

    return (
        <>
           
            <h2>Book List</h2>
            <PostList posts={posts} />
            

        </>
    );
}
