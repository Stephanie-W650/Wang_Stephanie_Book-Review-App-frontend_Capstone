import axios from 'axios'
//const baseURL = 'http://localhost:3000/comments'
const baseURL= 'https://wang-stephanie-book-review-app-backend.onrender.com/comments'
const postURL = 'https://wang-stephanie-book-review-app-backend.onrender.com/posts'
export async function getComments() {
  try {
    const response = await fetch(baseURL)
    const data = await response.json()
    return data;
  } catch (error) {
    console.error(error)
  }
} 

export async function getPosts() {
  try {
    const response = await fetch(postURL)
    const data = await response.json()
    return data;
  } catch (error) {
    console.error(error)
  }
} 

// export async function getCommentByID(id) {
//   try {
//     const response = await fetch(`http://localhost:3000/comments/${id}`)
//     const data = await response.json()
//     return data;
//   } catch (error) {
//     console.error(error)
//   }
// } 

// export async function editComment(id, updatedComment) {
//   try {
//     const response = await fetch((`http://localhost:3000/comments/${id}`), {
//       method: 'PUT',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(updatedComment)

//     })
//     const data = await response.json()
//     return data;
//   } catch (error) {
//     console.error(error)
//   }
// }

export const getCommentByID = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.get(URL)
    return response
}

export const editComment = async (id, updatedComment) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.put(URL, updatedComment)
    return response
    }

export const deleteComment = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.delete(URL)
    return response
}
