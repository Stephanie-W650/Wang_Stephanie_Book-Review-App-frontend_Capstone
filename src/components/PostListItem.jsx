

export default function PostListItem({ post }) {
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.genre}</p>
        
        </div>
  )
}
