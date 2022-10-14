import mesages from "../../assets/images/men.svg"
import iconch from "../../assets/images/love.svg"
import iconmange from "../../assets/images/Up.png"
import smile from "../../assets/images/louhtg.svg"
import iconclo from "../../assets/images/flag.svg"
import mesicon from "../../assets/images/chaq.png"
const Ourvalues = () => {
    return (
        <div className="future">
            <div className="container">
                <div className="future_top">
                    <p className="future_top-title">Our values</p>
                    <h3 className="future_top-text">How we work at Untitled</h3>
                    <p className="future_top-dicr">Our shared values keep us connected and guide us as one team.</p>
                </div>

                <div className="future_bottom">
                    <div className="future_bottom-wraper">
                        <img src={mesages} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title">Care about our team</h3>
                        <p className="future_bottom-text">Understand what matters to our employees. Give them what they need to do their best work.</p>
                    </div>
                    <div className="future_bottom-wraper">
                        <img src={iconch} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title">Be excellent to each other</h3>
                        <p className="future_bottom-text">No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.</p>
                    </div>
                    <div className="future_bottom-wraper">
                        <img src={iconmange} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title">Pride in what we do</h3>
                        <p className="future_bottom-text">Value quality and integrity in everything we do. At all times. No exceptions.</p>
                    </div>

                    <div className="future_bottom-wraper">
                        <img src={smile} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title">CDon't #!&$ the customer</h3>
                        <p className="future_bottom-text">Understand customers' stated and unstated needs. Make them wildly successful.</p>
                    </div>
                    <div className="future_bottom-wraper">
                        <img src={iconclo} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title">Do the impossible</h3>
                        <p className="future_bottom-text">Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"</p>
                    </div>
                    <div className="future_bottom-wraper">
                        <img src={mesicon} alt="img" width={48} height={48} />
                        <h3 className="future_bottom-title">Sweat the small stuff</h3>
                        <p className="future_bottom-text">We believe the best products come from the best attention to detail. Sweat the small stuff.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourvalues;