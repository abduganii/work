import { NavLink } from 'react-router-dom'
import Contents from "../../assets/images/Contents.png"
const Knowus = () => {
    return (
        <div className="Knowus">
            <div className="container">
                <div className="Knowus_left">
                    <p className="Knowus-name">Get to know us</p>
                    <h2 className="Knowus-title">We’re just getting started</h2>
                    <p className="Knowus-text">Untitled is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team all around the world.
                        Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work. Read more about </p>
                    <div className="join_btn">
                        <NavLink className="join_btn-link btn" to={'/'}>
                            Our principles
                        </NavLink>
                        <NavLink className="btn" to={'/aboutUs'}>
                            About us
                        </NavLink>
                    </div>
                </div>
                <img src={Contents} alt="img" />
            </div>
        </div>
    )
}

export default Knowus;