import PostListItem from "./PostListItem.jsx"

export default function PostList({ posts }) {
  return (
    <div>
      {posts && posts.map(post => {
                  return <PostListItem key={post._id} post={post}/>
              })
      
              }
    </div>
  )
}
