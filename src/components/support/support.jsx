import Image2 from '../../assets/images/Image21.png'

const Support = () => {
    return (
        <div className="Build Support">
            <div className="container">
                <div className="Build_top">
                    <p className="Build_top-title">Support</p>
                    <h3 className="Build_top-text">Frequently asked questions</h3>
                    <p className="Build_top-dicr">Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>

                <div className="Support_bottom">
                    <ul className="Support_bottom-list">
                        <li className="Support_bottom-item">
                            <div>

                                <p className="Support_bottom-title">Is there a free trial available?</p>
                                <p className="Support_bottom-text">Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.</p>
                            </div>
                        </li>
                        <li className="Support_bottom-item">
                            <div>

                                <p className="Support_bottom-title">Can I change my plan later?</p>
                                <p className="Support_bottom-text">Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                            </div>
                        </li>
                        <li className="Support_bottom-item">
                            <div>
                                <p className="Support_bottom-title">What is your cancellation policy?</p>
                                <p className="Support_bottom-text">We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
                            </div>
                        </li>
                        <li className="Support_bottom-item">
                            <div>

                                <p className="Support_bottom-title">Can other info be added to an invoice?</p>
                                <p className="Support_bottom-text">At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.</p>
                            </div>
                        </li>
                    </ul>
                    <img src={Image2} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Support;