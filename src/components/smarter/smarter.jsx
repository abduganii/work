import mesages from "../../assets/images/mesages.svg"
import iconch from "../../assets/images/iconch.png"
import iconmange from "../../assets/images/iconmange.svg"
import smile from "../../assets/images/smile.png"
import iconclo from "../../assets/images/iconclo.svg"
import mesicon from "../../assets/images/mesicon.png"
const Smarter = () => {
    return (

        <div className="Build Smarter">
            <div className="container">
                <div className="Build_top">
                    <p className="Build_top-title">Launch faster</p>
                    <h3 className="Build_top-text">Beautiful analytics to grow smarter</h3>
                    <p className="Build_top-dicr">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                </div>
                <div className="future_bottom">
                    <div className="future_bottom-wraper Smarter-wraper">
                        <img src={mesages} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title Smarter-title">Share team inboxes</h3>
                        <p className="future_bottom-text Smarter-text">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                    </div>
                    <div className="future_bottom-wraper Smarter-wraper">
                        <img src={iconch} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title Smarter-title">Deliver instant answers</h3>
                        <p className="future_bottom-text Smarter-text">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                    </div>
                    <div className="future_bottom-wraper Smarter-wraper">
                        <img src={iconmange} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title Smarter-title">Manage your team with reports</h3>
                        <p className="future_bottom-text Smarter-text">Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                    </div>

                    <div className="future_bottom-wraper Smarter-wraper">
                        <img src={smile} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title Smarter-title">Connect with customers</h3>
                        <p className="future_bottom-text Smarter-text">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
                    </div>
                    <div className="future_bottom-wraper Smarter-wraper">
                        <img src={iconclo} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title Smarter-title">Connect the tools you already use</h3>
                        <p className="future_bottom-text Smarter-text">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
                    </div>
                    <div className="future_bottom-wraper Smarter-wraper">
                        <img src={mesicon} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title Smarter-title">Our people make the difference</h3>
                        <p className="future_bottom-text Smarter-text">We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smarter;