import React from 'react'
import './Footer.scss'
import logoDark from './../../assets/logo_dark.png'
import logoBigDark from './../../assets/logo_B_dark.png'

const Footer = () => {
    return (
        <div className='Footer'>
            {/* footer left */}
            <div className="footer__left">
                <img src={logoBigDark} alt="{imageLogo dark}" className='logoBig' />
                <a href="#s"><img src={logoDark} alt="{logoDark image}" className='logoDark' /></a>
            </div>
            {/* footer middle */}
            <div className="footer__middle">
                {/* middle-left */}
                <div className="footer__middle--left">
                    <h2>FIGHT WITH ME ON:</h2>
                    <div className="social__links">
                        <a href="https://twitter.com/">Twitter</a>
                        <a href="https://www.instagram.com/">Instagram</a>
                        <a href="https://telegram.org/">Telegram</a>
                        <a href="https://www.youtube.com/">Youtube</a>
                        <a href="http://figma.com/">Figma</a>
                    </div>
                </div>
                {/* middle-right */}
                <div className="footer__middle--right">
                    <h2>WHAT I HAVE DONE:</h2>
                    <div className="social__links">
                        <a href="#s">Xalq Kutubxonasi</a>
                        <a href="#s">Websitee</a>
                        <a href="#s">Website</a>
                        <a href="#s">Play market</a>
                        <a href="#s">App store</a>
                    </div>
                </div>
            </div>
            {/* footer right */}
            <div className="footer__right">
                <div className="social__links">
                    <a href="#s">Contacts</a>
                    <a href="#s">Blog</a>
                    <a href="#s">Dribble</a>
                    <a href="#s">Behance</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;