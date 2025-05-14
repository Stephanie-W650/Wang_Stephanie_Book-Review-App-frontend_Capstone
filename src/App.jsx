import { Routes, Route } from 'react-router-dom';
import CreateCommentPage from './pages/CreateCommentPage.jsx';
import 

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Homepage />} />
        <Route path='/createcomment' element={<CreateCommentPage />} />
        <Route path='/:id' element={<Comment />} />
        <Route path='/edit/:id' element={<EditComment />} />
         {/* <Route path='/new' element={<CreateComment />} /> */}
      </Routes>
        
    </>
  )
}

export default App
