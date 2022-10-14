import Image2 from '../../assets/images/Image212.png'
import Image3 from '../../assets/images/Image34.png'
import Image4 from '../../assets/images/Image43.png'
const Posts = () => {
    return (
        <div className="post">
            <div className="container">
                <h3 className="post-title">All blog posts</h3>
                <div className="post_bottom">
                    <div className="post_wrapper">
                        <img src={Image2} alt="img" />
                        <p className='post_wrapper-date'> Alec Whitten • 17 Jan 2022</p>
                        <div className='post_wrapper-ds'><h3 className='post_wrapper-tilte'> Bill Walsh leadership lessons</h3></div>
                        <p className="post_wrapper-text">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                    </div>
                    <div className="post_wrapper">
                        <img src={Image3} alt="img" />
                        <p className='post_wrapper-date'> Demi WIlkinson • 16 Jan 2022</p>
                        <div className='post_wrapper-ds'><h3 className='post_wrapper-tilte'>PM mental models</h3></div>
                        <p className="post_wrapper-text">Mental models are simple expressions of complex processes or relationships.</p>
                    </div>
                    <div className="post_wrapper">
                        <img src={Image4} alt="img" />
                        <p className='post_wrapper-date'> Candice Wu • 15 Jan 2022</p>
                        <div className='post_wrapper-ds'><h3 className='post_wrapper-tilte'> What is Wireframing?</h3></div>
                        <p className="post_wrapper-text">Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
                    </div>
                </div>
                <div className='post_btn'>
                    <button className='post_btn-Previous'>Previous</button>
                    <ul className='post_btn-list'>
                        <li className='post_btn-item'>
                            <button className='post_btn-number'>1</button>
                        </li>
                        <li className='post_btn-item'>
                            <button className='post_btn-number'>2</button>
                        </li>
                        <li className='post_btn-item'>
                            <button className='post_btn-number'>3</button>
                        </li>
                    </ul>
                    <button className='post_btn-next'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Posts; 