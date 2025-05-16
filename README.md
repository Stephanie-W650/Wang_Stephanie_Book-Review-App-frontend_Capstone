Book Review App (Frontend):

This project is the frontend part of a full-stack Application using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to create, read, update, and delete book reviews/comments.It connects to the backedn via API requests to manage the comments/reviews stored in MondoDB database.

Project Overview:
The Book Reviews application is designed to allow users to share their opinions on books they’ve read, post reviews, and rate them.

Features:
Create Comment: Users can create new book reviews.
View Comments: Users can see a list of all comments/reviews.
Edit Comment: Users can update the details of an existing comment/reivew.
Delete Comment: Users can delete a comment/review.
Dark Mode Toggle: A button to switch between light and dark themes for the app.


Technologies Used:
React 
React Router
Axios/Fetch 
CSS 
React Hooks 
MondoDB & Mongoose - Database for storing commnents/reviews backend.
Express & Node.js - Backend framework

API Endpoints:
This frontend connects to a backend server running on http://localhost:3000/comments 

Available Endpoints:
GET comments: Fetch all comments.
GET Post: Fetch all posts (for future plan).
GET comments/:id: Fetch a specific comment by ID.
POST comments: Create a new comment.
PUT comments/:id: Update an existing comment.
DELETE comments/:id: Delete a comment.


References:
https://medium.com/@shuklawhyaman/basic-implementation-of-a-reviews-and-ratings-feature-in-react-js-b1c9c6cae092

https://thehumblecoder.medium.com/day-6-theme-toggle-button-with-usestate-hook-863a54c51d83

https://developer.mozilla.org/en-US/docs/Web/CSS/list-style

Github:
https://github.com/Stephanie-W650/Wang_Stephanie_Book-Review-App-frontend_Capstone
https://github.com/Stephanie-W650/Wang_Stephanie_Book-Review-App-backend_Capstone

Link to deployed site:
https://wang-stephanie-book-review-app-frontend.onrender.com/


Directions on how to install the application locally:
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
git clone
cd file_name
npm install


Any future plans:
complete another CRUD for book list/post
Add a search functionality for book reviews
improve styling for the app

User Stories
1. read reviews
The user can read a list of book reviews on the homepage so that the user can see what others think about books.Then he/she wants to click on a review to see its full details, including the username, reviews, and ratings.

2. create reviews
The user wants to create a new book review so that he/she can share thoughts on a book.

3. editing reviews
The user can edit a review that he/she has already submitted.

4. delete reviews
The user can delete a review that he/she no longer wish to keep.

