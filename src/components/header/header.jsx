import logo from "../../assets/images/logo.svg"
import { NavLink } from 'react-router-dom'
import { useRef } from "react"

const Header = () => {

    const x = useRef()

    const reamveClass = () => {
        x.current.style.color = '#DC6803'
    }
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
                        <li className='header__nav-item' >
                            <NavLink ref={x} className="header__nav-link clolor" onClick={reamveClass} to={'/'}>
                                Home
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/service'}  >
                                Service
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/products'}>
                                Products
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/pricing'} >
                                Pricing
                            </NavLink>
                        </li>
                        <li className='header__nav-item'>
                            <NavLink className="header__nav-link" to={'/blog'} >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="header__btn">
                    <NavLink className="header__btn-link" to={'/contactUs'}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;