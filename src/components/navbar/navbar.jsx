import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <ul className="navbar-list" onClick={(e) => {
                    console.log(e.target)
                }}>
                    <li className="navbar-item">
                        <NavLink className="navbar-link" to={'/post'}>
                            Blog
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="navbar-link" to={'/ourTeam'}>
                            Our Team
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink className="navbar-link" to={'/aboutUs'}>
                            About US
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;