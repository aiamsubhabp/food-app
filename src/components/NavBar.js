import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return(
        <nav>
            <NavLink
                to='/'
                className='nav-link'
            >
                Home Page
            </NavLink>
            <NavLink
                to='/foodform'
                className='nav-link'
            >
                Add a Food Item
            </NavLink>
        </nav>

    )
}

export default NavBar