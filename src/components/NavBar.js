import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return(
        <nav>
            <NavLink
                to='/'
                className='nav-link'
            >
                Foods
            </NavLink>
            <NavLink
                to='/desserts'
                className='nav-link'
            >
                Desserts
            </NavLink>
        </nav>

    )
}

export default NavBar