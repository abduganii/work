import { useRef } from "react";

const Question = () => {

    const x = useRef();
    const y = useRef();
    return (
        <div className="Question">
            <div className="container">
                <h3 className="Question-title">Frequently asked questions</h3>
                <p className="Question-text">Everything you need to know about the product and billing.</p>

                <ul className="Question-list">
                    <li className="Question-item">
                        <div>
                            <p className="Question-item-text"> Is there a free trial available?</p>
                            <button className="Question-item-round" onClick={() => {
                                x.current.classList.toggle("none")
                                y.current.classList.toggle("diplaynone")
                            }}>
                                <div ref={x} className="Question-item-round-plus"></div>
                                <div className="Question-item-round-minus"></div>
                            </button>
                        </div>
                        <p ref={y} className="Question-item-text2 diplaynone">
                            Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                        </p>
                    </li>
                    <li className="Question-item">
                        <div>
                            <p className="Question-item-text">Can I change my plan later?</p>
                            <button className="Question-item-round">
                                <div className="Question-item-round-plus"></div>
                                <div className="Question-item-round-minus"></div>
                            </button>
                        </div>
                    </li>
                    <li className="Question-item">
                        <div>
                            <p className="Question-item-text"> What is your cancellation policy?</p>
                            <button className="Question-item-round">
                                <div className="Question-item-round-plus"></div>
                                <div className="Question-item-round-minus"></div>
                            </button>
                        </div>
                    </li>
                    <li className="Question-item">
                        <div>
                            <p className="Question-item-text"> Can other info be added to an invoice?</p>
                            <button className="Question-item-round">
                                <div className="Question-item-round-plus"></div>
                                <div className="Question-item-round-minus"></div>
                            </button>
                        </div>
                    </li>
                    <li className="Question-item">
                        <div>
                            <p className="Question-item-text"> How does billing work?</p>
                            <button className="Question-item-round">
                                <div className="Question-item-round-plus"></div>
                                <div className="Question-item-round-minus"></div>
                            </button>
                        </div>
                    </li>
                    <li className="Question-item">
                        <div>
                            <p className="Question-item-text"> How do I change my account email?</p>
                            <button className="Question-item-round">
                                <div className="Question-item-round-plus"></div>
                                <div className="Question-item-round-minus"></div>
                            </button>
                        </div>
                    </li>
                    <li className="Question-item">
                        <div>
                            <p className="Question-item-text"> You're getting ALL THIS.... and it's not even Christmas Yet?</p>
                            <button className="Question-item-round">
                                <div className="Question-item-round-plus"></div>
                                <div className="Question-item-round-minus"></div>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Question;