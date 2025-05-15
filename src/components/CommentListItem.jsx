

export default function CommentListItem({ comment }) {
  return (
    <div className="comment-list-item">
        <p>Username: {comment.username}</p>
        <p>Reviews: {comment.content}</p>
        <p>Ratings: {comment.rating}</p>

    </div>
  )
}
