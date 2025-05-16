import CommentListItem from "./CommentListItem.jsx"

export default function CommentList({ comments }) {
//check if comments is true and then map through it to render each comment
  return (
    <div>

        {comments && comments.map(comment => {
            return <CommentListItem key={comment._id} comment={comment}/>
        })

        }
    </div>
  )
}
