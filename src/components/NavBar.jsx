import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
           <h1> Books Reviews App</h1>
            <nav>
                
                <Link to="/createcomment">Create Comment Page</Link>
                <Link to="/post">Post Page</Link>
               
            </nav>
        </>
    )
}




