export async function getComments() {
  try {
    const response = await fetch('http://localhost:3000/comments')
    const data = await response.json()
    return data;
  } catch (error) {
    console.error(error)
  }
} 