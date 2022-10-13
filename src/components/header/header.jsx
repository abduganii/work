import logo from "../../assets/images/logo.svg"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-box">
                    <NavLink to="/">
                        <img src={logo} alt="logo" width={112} height={44} />
                    </NavLink>
                </div>
                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/'}>
                                Home
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/service'}>
                                Service
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/'}>
                                Products
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/'}>
                                Pricing
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/'}>
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="header__btn">
                    <NavLink className="header__btn-link" to={'/'}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;