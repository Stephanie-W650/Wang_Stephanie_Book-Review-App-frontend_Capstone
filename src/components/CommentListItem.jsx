

export default function CommentListItem({ comment }) {
  return (
    <div>
        <h2>{comment.username}</h2>
        <p>{comment.content}</p>
        <p>{comment.rating}</p>
        {/* <button>Edit</button>
        <button>Delete</button> */}

    </div>
  )
}
