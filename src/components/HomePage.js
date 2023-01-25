import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Switch, Route} from "react-router-dom";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import AboutMeModal from './AboutMeModal';


function HomePage() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    const [showModal, setShowModal] = useState(false);


    const history = useHistory()
    return (
<div>
        <h1>Welcome! My name is Joe Robbins</h1>
        <h3 style={{width: '890px'}}>I'm a Software Engineering Bootcamp graduate who is excited to start a career in Software Development. </h3>
        <div className = "wrapper">
        <div className = "static-txt">    </div>
        <ul className = "dynamic-txts">
            <li><span>Developer</span></li>
            <li><span>Scientist</span></li>
            <li><span>Student</span></li>
            <li><span>Dog Lover</span></li>
            </ul>
        </div>
        <div className='nav-links'>
            <div >
                <h3 onClick={() => setShowModal(true)}  className='link'>About Me</h3>
            </div>

            {showModal ? <AboutMeModal setShowModal={setShowModal}/> : null}

            <div >
                <h3 onClick={() => openInNewTab('https://medium.com/@joe.robbins.cpt')} className='link2'>Blog</h3>
            </div>

            <div >
                <h3 onClick={() => history.push('/RecentProjects')} className='link3'>Recent Projects</h3>
            </div>

            {/* <div >
                <h3 onClick={() => history.push('/InTheWorks')} className='link4'>What I'm Up To</h3>
            </div> */}
        </div>

        <div className='lets-connect'>
            <br></br>
            <br></br>
            <p >Let's Connect!</p>
            <p style={{fontSize: '14px'}}>joe.robbins.swe@gmail.com</p>
            <a className='connect-icons' href='https://www.linkedin.com/in/joe-robbins-swe/' target="_blank"><  FaLinkedin size={35}/></a>
            <a className='connect-icons'  href='https://github.com/Jrobbins973' target="_blank"><  FaGithub size={35}/></a>
            <a className='connect-icons'  href='https://medium.com/@joe.robbins.cpt' target="_blank"><  FaMedium size={35}/></a>

        </div>
</div>
    )
}

export default HomePage