import Imagew from '../../assets/images/Imagew.png'

const Build = () => {
    return (

        <div className="Build">
            <div className="container">
                <div className="Build_top">
                    <p className="Build_top-title">Launch faster</p>
                    <h3 className="Build_top-text">Build something great</h3>
                    <p className="Build_top-dicr">We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster..</p>
                </div>
                <div className="Build_bottom">
                    <div className="Build_bottom-left">
                        <div className="Build_bottom-wrapper">
                            <h2 className="Build_bottom-number">4,000+</h2>
                            <p className="Build_bottom-title">Global customers</p>
                            <p className='Build_bottom-text'>We've helped over 4,000 amazing global companies.</p>
                        </div>
                        <div className="Build_bottom-wrapper">
                            <h2 className="Build_bottom-number">600%</h2>
                            <p className="Build_bottom-title">Return on investment</p>
                            <p className='Build_bottom-text'>Our customers have reported an average of ~600% ROI.</p>
                        </div>
                        <div className="Build_bottom-wrapper">
                            <h2 className="Build_bottom-number">10k</h2>
                            <p className="Build_bottom-title">Global downloads</p>
                            <p className='Build_bottom-text'>Our app has been downloaded over 10k times.</p>
                        </div>
                        <div className="Build_bottom-wrapper">
                            <h2 className="Build_bottom-number">200+</h2>
                            <p className="Build_bottom-title">5-star reviews</p>
                            <p className='Build_bottom-text'>We're proud of our 5-star rating with over 200 reviews.</p>
                        </div>
                    </div>
                    <img src={Imagew} alt="img" />
                </div>
            </div>
        </div>

    )
}

export default Build;