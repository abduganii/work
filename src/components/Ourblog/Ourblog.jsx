import { NavLink } from 'react-router-dom'
import Image2 from '../../assets/images/Image212.png'
import Image3 from '../../assets/images/Image34.png'
import Image4 from '../../assets/images/Image43.png'
const Ourblog = () => {
    return (
        <div className="Ourblog">
            <div className="container">
                <div className='Ourblog_top'>
                    <div className='Ourblog_top-left'>
                        <p className='Ourblog_top-text'>Our blog</p>
                        <h2 className='Ourblog_top-title'>Lastest blog posts</h2>
                        <p className='Ourblog_top-dicr'>Tool and strategies modern teams need to help their companies grow.</p>
                    </div>
                    <div className='Ourblog_btn'>
                        <NavLink className="Ourblog_btn-link btn" to={'/post'}>
                            View all posts
                        </NavLink>
                    </div>
                </div>

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
            </div>
        </div>
    )
}

export default Ourblog;