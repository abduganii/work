import image8 from "../../assets/images/image8.png"
import { NavLink } from 'react-router-dom'

const Join = () => {
    return (
        <div className="OurService_container join">
            <div className="container">
                <div className="OurService_left">

                    <h3 className="join-title">Join 4,000+ startups growing with Untitled</h3>

                    <ul className="OurService-list join-list">
                        <li className="OurService-item">30-day free trial</li>
                        <li className="OurService-item">Peronalized onboarding</li>
                        <li className="OurService-item">Access to all features</li>
                    </ul>
                    <div className="join_btn">
                        <NavLink className="join_btn-link btn" to={'/'}>
                            Learn more
                        </NavLink>
                        <NavLink className="btn" to={'/'}>
                            Get started
                        </NavLink>
                    </div>
                </div>
                <img className=" join-img" src={image8} alt="img" />
            </div>

        </div>
    )
}

export default Join;