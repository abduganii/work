import layers from "../../assets/images/layers.svg"
import sisyphus from "../../assets/images/sisyphus.png"
import Circooles from "../../assets/images/Circooles.svg"
import Catalog from "../../assets/images/Catalog.svg"
import quotient from "../../assets/images/quotient.png"
const Companies = () => {
    return (

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

    )
}
export default Companies;