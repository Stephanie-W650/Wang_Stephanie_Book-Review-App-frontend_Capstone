import axios from 'axios'
//const baseURL = 'http://localhost:3000/comments'
const baseURL= 'https://wang-stephanie-book-review-app-backend.onrender.com/comments'
const postURL = 'https://wang-stephanie-book-review-app-backend.onrender.com/posts'

//show all comments
export async function getComments() {
  try {
    const response = await fetch(baseURL)
    const data = await response.json()
    return data;
  } catch (error) {
    console.error(error)
  }
} 
//show all posts
export async function getPosts() {
  try {
    const response = await fetch(postURL)
    const data = await response.json()
    return data;
  } catch (error) {
    console.error(error)
  }
} 




// show one comment
export const getCommentByID = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.get(URL)
    return response
}
//update a commnet
export const editComment = async (id, updatedComment) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.put(URL, updatedComment)
    return response
    }
//delete a comment
export const deleteComment = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.delete(URL)
    return response
}

