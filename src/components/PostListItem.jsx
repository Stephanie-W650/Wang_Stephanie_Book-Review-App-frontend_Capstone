

export default function PostListItem({ post }) {
  return (
    <div className="Post-list-item">
        <p>Title: {post.title}</p>
        <p>Content: {post.content}</p>
        <p>Genre: {post.genre}</p>
        
        </div>
  )
}
