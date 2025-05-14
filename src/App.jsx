import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreateCommentPage from './pages/CreateCommentPage.jsx';


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/createcomment' element={<CreateCommentPage />} />
        {/* <Route path='/:id' element={<Comment />} />
         <Route path='/edit/:id' element={<EditComment />} /> */}
         {/* <Route path='/new' element={<CreateComment />} /> */}
      </Routes>
        
    </>
  )
}

export default App
