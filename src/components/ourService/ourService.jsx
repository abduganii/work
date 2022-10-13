import Featured from "../../assets/images/Featured.png"

import image5 from "../../assets/images/image5.png"
import image6 from "../../assets/images/image6.png"
import image7 from "../../assets/images/image7.png"

const OurService = () => {
    return (
        <div className="OurService">

            <div className="OurService_container">
                <div className="container">
                    <div className="OurService_left">

                        <img src={Featured} alt="rasm" width={48} height={48} />
                        <h3 className="OurService-title">Share team inboxes</h3>
                        <p className="OurService-text">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>

                        <ul className="OurService-list">
                            <li className="OurService-item">Leverage automation to move fast</li>
                            <li className="OurService-item">Always give customers a human to chat to</li>
                            <li className="OurService-item">Automate customer support and close leads faster</li>
                        </ul>
                    </div>
                    <img className="OurService-img" src={image5} alt="img" />
                </div>
            </div>
            <div className="OurService_container">
                <div className="container">
                    <div className="OurService_left">

                        <img src={Featured} alt="rasm" width={48} height={48} />
                        <h3 className="OurService-title">Deliver instant answers</h3>
                        <p className="OurService-text">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>

                        <ul className="OurService-list">
                            <li className="OurService-item">Keep your customers in the loop with live chat</li>
                            <li className="OurService-item">Embed help articles right on your website</li>
                            <li className="OurService-item">Customers never have to leave the page to find an answer</li>
                        </ul>
                    </div>
                    <img className="OurService-img img2" src={image6} alt="img" />
                </div>
            </div>
            <div className="OurService_container">
                <div className="container">
                    <div className="OurService_left">

                        <img src={Featured} alt="rasm" width={48} height={48} />
                        <h3 className="OurService-title">Manage your team with reports</h3>
                        <p className="OurService-text">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>

                        <ul className="OurService-list">
                            <li className="OurService-item">Filter, export, and drilldown on the data quickly</li>
                            <li className="OurService-item">Save, schedule, and automate reports to your inbox</li>
                            <li className="OurService-item">Connect the tools you already use with 100+ integrations</li>
                        </ul>
                    </div>
                    <img className="OurService-img" src={image7} alt="img" />
                </div>
            </div>
        </div>

    )
}

export default OurService;