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
  // State hook to manage dark mode,'dark' will be true for dark theme and false for light theme
  const [dark, setDark] = useState(false)
  const toggleTheme = () => {
  setDark((prevTheme) => !prevTheme);}

    return (

// The div has a class that changes depending on the current theme (dark or light)
// 'dark-theme' is applied when 'dark' state is true, and 'light-theme' is applied when false.
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
