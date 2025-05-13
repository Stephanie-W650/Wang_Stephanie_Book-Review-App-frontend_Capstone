import CommentListItem from "./CommentListItem.jsx"

export default function CommentList({ comments }) {

  return (
    <div>
        {comments && comments.map(comment => {
            return <CommentListItem key={comment._id} comment={comment}/>
        })

        }
    </div>
  )
}
