import image1 from "../../assets/images/image17.png"
import layers from "../../assets/images/layers.svg"
import sisyphus from "../../assets/images/sisyphus.png"
import Circooles from "../../assets/images/Circooles.svg"
import Catalog from "../../assets/images/Catalog.svg"
import quotient from "../../assets/images/quotient.png"
import { NavLink } from 'react-router-dom'

const Analytics = () => {
    return (
        <>
            <div className="Analytics">
                <div className="container">
                    <h1 className="Analytics-title">Beautiful analytics to grow smarter</h1>
                    <p className="Analytics-text">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                    <div className="Analytics_btn">
                        <NavLink className="Analytics_btn-link btn" to={'/'}>
                            Demo
                        </NavLink>
                        <NavLink className="btn" to={'/'}>
                            Get in touch
                        </NavLink>
                    </div>
                    <img className="Analytics_img" src={image1} alt="rasm" />
                </div>
            </div>
            <div className="Analytics_bottom">
                <div className="container">
                    <p className="Analytics_bottom-text">Join 4,000+ companies already growing</p>
                    <div className="Analytics_bottom-logo">
                        <img className="Analytics_bottom-logos" src={layers} alt="img" />
                        <img className="Analytics_bottom-logos" src={sisyphus} alt="img" />
                        <img className="Analytics_bottom-logos" src={Circooles} alt="img" />
                        <img className="Analytics_bottom-logos" src={Catalog} alt="img" />
                        <img className="Analytics_bottom-logos" src={quotient} alt="img" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Analytics;