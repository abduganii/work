const ContactUs = () => {
    return (
        <div className="ContactUs">
            <div className="container">
                <div className="ContactUs_top">
                    <p className="ContactUs_top-text">Contact us</p>
                    <h3 className="ContactUs_top-title">Get in touch</h3>
                    <p className="ContactUs_top-dicr ">Our friendly team would love to hear from you.</p>
                </div>
                <div className="ContactUs_map">
                    <div className="ContactUs_map-left">
                        <div className="ContactUs_map-wrapper">
                            <div>
                                <h3 className="ContactUs_map-tilte">Email</h3>
                                <p className="ContactUs_map-text">  Our friendly team is here to help.</p>
                                <p className="ContactUs_map-gmail">hi@untitledui.com</p>
                            </div>
                        </div>
                        <div className="ContactUs_map-wrapper">
                            <div>
                                <h3 className="ContactUs_map-tilte">Office</h3>
                                <p className="ContactUs_map-text"> Come say hello at our office HQ.</p>
                                <p className="ContactUs_map-gmail">100 Smith StreetCollingwood VIC 3066 AU</p>
                            </div>
                        </div>
                        <div className="ContactUs_map-wrapper">
                            <div>
                                <h3 className="ContactUs_map-tilte">Phone</h3>
                                <p className="ContactUs_map-text">  Mon-Fri from 8am to 5pm.</p>
                                <p className="ContactUs_map-gmail">+1 (555) 000-0000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ContactUs_form">
                    <p className="ContactUs_form-name">Contact us</p>
                    <h3 className="ContactUs_form-title">Get in touch</h3>
                    <p className="ContactUs_form-dicr">We’d love to hear from you. Please fill out this form.</p>

                    <form className="ContactUs_form-bottom">
                        <div className="ContactUs_form-bottom-fuulname">
                            <div>
                                <label className="ContactUs_form-bottom-label" htmlFor="firstname">First name</label>
                                <br />
                                <input className="ContactUs_form-bottom-input" id="firstname" type="text" name="firsname" placeholder="First name" />
                            </div>
                            <div>

                                <label className="ContactUs_form-bottom-label" htmlFor="lastname">Last name</label>
                                <br />
                                <input className="ContactUs_form-bottom-input" id="lastname" type="text" name="lastname" placeholder="Last name" />
                            </div>
                        </div>
                        <div>
                            <label className="ContactUs_form-bottom-label" htmlFor="email">Email</label>
                            <br />
                            <input className="ContactUs_form-bottom-input" id="email" type="email" name="email" placeholder="you@company.com" />
                        </div>

                        <div>
                            <label className="ContactUs_form-bottom-label" htmlFor="number">Phone number</label>
                            <br />
                            <input className="ContactUs_form-bottom-input" id="number" type="number" name="number" placeholder="+1 (555) 000-0000" />
                        </div>
                        <div>
                            <label className="ContactUs_form-bottom-label" htmlFor="Message">Message</label>
                            <br />
                            <textarea className="ContactUs_form-bottom-input" id="number" type={"text"} name="text" />
                        </div>

                        <div>
                            <input type={"checkbox"} />
                            <span className="ContactUs_form-bottom-check" >You agree to our friendly privacy policy.</span>
                        </div>
                        <button className="btn ContactUs_form-bottom-btn">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;