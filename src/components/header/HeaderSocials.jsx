import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <small>Social Links: </small>
      <a href="https://www.linkedin.com/in/etang-kencliff-andock-tabi-atem-085226240/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Etang-ken" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.twitter.com/Ekencliff" target="_blank" rel="noreferrer"><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials