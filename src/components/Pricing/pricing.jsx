import icon from "../../assets/images/Featuredicone.svg"

const Pricing = () => {
    return (
        <div className="Pricing">

            <div className="Pricing__top">
                <div className="container">
                    <p className="Pricing__top-text">Pricing plans</p>
                    <h3 className="Pricing__top-title">Plans for all sizes</h3>
                    <p className="Pricing__top-dicr">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                </div>
            </div>
            <div className="Pricing_bottom">
                <div className="container">
                    <div className="Pricing_bottom-draper">
                        <div className="Pricing_bottom-box">
                            <img src={icon} alt="img" width={40} height={40} />
                            <p className="Pricing_bottom-text">Basic plan</p>
                            <h3 className="Pricing_bottom-title">$10/mth</h3>
                            <p className="Pricing_bottom-dicr">Billed annually.</p>
                        </div>
                        <ul className="Pricing_bottom-list">
                            <li className="Pricing_bottom-item">Access to all basic features</li>
                            <li className="Pricing_bottom-item">Basic reporting and analytics</li>
                            <li className="Pricing_bottom-item">Up to 10 individual users</li>
                            <li className="Pricing_bottom-item">20GB individual data each user</li>
                            <li className="Pricing_bottom-item">Basic chat and email support</li>
                        </ul>
                    </div>
                    <div className="Pricing_bottom-draper">
                        <div className="Pricing_bottom-box">
                            <img src={icon} alt="img" width={40} height={40} />
                            <p className="Pricing_bottom-text">Basic plan</p>
                            <h3 className="Pricing_bottom-title">$10/mth</h3>
                            <p className="Pricing_bottom-dicr">Billed annually.</p>
                        </div>
                        <ul className="Pricing_bottom-list">
                            <li className="Pricing_bottom-item">Access to all basic features</li>
                            <li className="Pricing_bottom-item">Basic reporting and analytics</li>
                            <li className="Pricing_bottom-item">Up to 10 individual users</li>
                            <li className="Pricing_bottom-item">20GB individual data each user</li>
                            <li className="Pricing_bottom-item">Basic chat and email support</li>
                        </ul>
                    </div>
                    <div className="Pricing_bottom-draper">
                        <div className="Pricing_bottom-box">
                            <img src={icon} alt="img" width={40} height={40} />
                            <p className="Pricing_bottom-text">Basic plan</p>
                            <h3 className="Pricing_bottom-title">$20/mth</h3>
                            <p className="Pricing_bottom-dicr">Billed annually.</p>
                        </div>
                        <ul className="Pricing_bottom-list">
                            <li className="Pricing_bottom-item">Access to all basic features</li>
                            <li className="Pricing_bottom-item">Basic reporting and analytics</li>
                            <li className="Pricing_bottom-item">Up to 10 individual users</li>
                            <li className="Pricing_bottom-item">20GB individual data each user</li>
                            <li className="Pricing_bottom-item">Basic chat and email support</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Pricing;