import Navbar from "../navbar/navbar";
import Imageroom from "../../assets/images/Imageroom.png"
const CompaniesStatis = () => {
    return (
        <>
            <div className="Features">
                <div className="container">
                    <h4 className="Features__title">About us</h4>
                    <h2 className="Features__text">About the company</h2>
                    <p className="Features__disc">Learn more about the company and the team behind it.</p>
                </div>
            </div>
            <Navbar />
            <div className="CompaniesStatis">
                <div className="container">
                    <img src={Imageroom} alt="img" />
                    <div className="CompaniesStatis_right">
                        <div className="CompaniesStatis_right-top">
                            <p className="CompaniesStatis_right-top-text">We’ve helped hundreds of companies</p>
                            <h3 className="CompaniesStatis_right-top-title">We’re only just getting started on our journey</h3>
                        </div>
                        <div className="CompaniesStatis_right-bottom">
                            <div>
                                <h3 className="CompaniesStatis_right-bottom-title">400+</h3>
                                <p className="CompaniesStatis_right-bottom-text">Projects completed </p>
                            </div>
                            <div>
                                <h3 className="CompaniesStatis_right-bottom-title">600%</h3>
                                <p className="CompaniesStatis_right-bottom-text">Return on investment </p>
                            </div>
                            <div>
                                <h3 className="CompaniesStatis_right-bottom-title">10k</h3>
                                <p className="CompaniesStatis_right-bottom-text">Global downloads </p>
                            </div>
                            <div>
                                <h3 className="CompaniesStatis_right-bottom-title">200+</h3>
                                <p className="CompaniesStatis_right-bottom-text">5-star reviews </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CompaniesStatis;