import mebel from "../../assets/images/image1.png"
import phone from "../../assets/images/image2.png"
import play from "../../assets/images/play.svg"
import app from "../../assets/images/app.svg"

import { NavLink } from 'react-router-dom'

const Beautiful = () => {
    return (
        <div className="Beautiful">
            <div className="container">
                <div className="Beautiful_left">
                    <h1 className="Beautiful_left-title">Beautiful analytics to grow smarter</h1>
                    <p className="Beautiful_left-text">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4, 000 startups.</p>
                    <div className="Beautiful_left-btn">
                        <NavLink className={"Beautiful_left-link"} to="/"> <img src={play} alt="logo" width={135} height={40} />
                        </NavLink>
                        <NavLink className={"Beautiful_left-link"} to="/"> <img src={app} alt="logo" width={135} height={40} />
                        </NavLink>
                    </div>
                </div>
                <div className="Beautiful_right">
                    <img className="Beautiful_right-mobel" src={mebel} alt="rasm" />
                    <img className="Beautiful_right-phone" src={phone} alt="rasm" />
                </div>
            </div>
        </div >)
}

export default Beautiful;