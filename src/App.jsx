import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import HomePage from './pages/HomePage.jsx';
import CreateCommentPage from './pages/CreateCommentPage.jsx';
import EditCommentPage from './pages/EditCommentPage.jsx';
import CommentPage from './pages/CommentPage.jsx';
import PostPage from './pages/PostPage.jsx'
import DarkModeToggle from './components/DarkModeToggle.jsx'
import './App.css';



function App() {
  const [dark, setDark] = useState(false)
  const toggleTheme = () => {
  setDark((prevTheme) => !prevTheme);}

    return (

      <div className={`themeContainer ${dark ? "dark-theme" : "light-theme"}`}>
      
      <DarkModeToggle toggleTheme={toggleTheme} dark={dark} />


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/createcomment' element={<CreateCommentPage />} />
          <Route path='/edit/:id' element={<EditCommentPage />} />
          <Route path="/:id" element={<CommentPage />} />
          <Route path="/post" element={<PostPage />} />

        </Routes>

      </div>
    )
  }

  export default App
