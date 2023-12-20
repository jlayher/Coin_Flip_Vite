import React from 'react'
import "./footer.css"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";


const Footer = () => {
  return (
    <div className='footer__container'>
      
      <div className='footer__container-copyright'>
        ©2023 John Layher: All Rights Reserved
      </div>

      <div className='footer__container-social'>
        
        <div className='footer__container-social_icon'>
          <a href='https://www.linkedin.com/in/john-e-layher/'>
            <CiLinkedin className='footer__container-social_icon-icon'/>
          </a>
        </div>

        <div className='footer__container-social_icon'>
          <a href='https://github.com/jlayher'>
            <FaGithub className='footer__container-social_icon-icon'/>
          </a>
        </div>

        <div className='footer__container-social_icon'>
          <a href="https://www.johnlayher-portfolio.com/">
            <HiOutlineUserCircle className='footer__container-social_icon-icon'/>
          </a>
        </div>

      </div>
     
    </div>
  )
}

export default Footer