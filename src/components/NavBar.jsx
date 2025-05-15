import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <header>
                <h1> Book Reviews</h1>
                <nav>

                    <Link to="/createcomment" className="navLink">Create Reviews</Link>
                    <Link to="/post" className="navLink">Book List</Link>

                </nav>
            </header>
        </>
    )
}




