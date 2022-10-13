import Feature from "../../assets/images/Feature1.png"

const Upleash = () => {
    return (
        <div className="Upleash">
            <div className="container">
                <img className="Upleash-img" src={Feature} width={56} height={56} />
                <h3 className="Upleash-title">Unleash the full power of data</h3>
                <p className="Upleash-text">Everything you need to convert, engage, and retain more users.</p>
                <ul className="Upleash-list">
                    <li className="Upleash-item">
                        <h2>40+</h2>
                        <p>Integrations</p>
                    </li>
                    <li className="hr"></li>
                    <li className="Upleash-item">
                        <h2>600%</h2>
                        <p>Return on investment</p>
                    </li>
                    <li className="hr"></li>
                    <li className="Upleash-item">
                        <h2>4k+</h2>
                        <p>Global customers</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Upleash;