import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreateCommentPage from './pages/CreateCommentPage.jsx';
import EditCommentPage from './pages/EditCommentPage.jsx';
import CommentPage from './pages/CommentPage.jsx';


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/createcomment' element={<CreateCommentPage />} />
        {/* <Route path='/:id' element={<Comment />} /> */}
         <Route path='/edit/:id' element={<EditCommentPage />} />
         <Route path="/:id" element={<CommentPage />} />
        
      </Routes>
        
    </>
  )
}

export default App
