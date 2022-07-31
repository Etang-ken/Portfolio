import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import ME from '../../assets/bg1.jpg';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container border-box">
        <div className="row align-items-center">
          <div className="my-image col-12 col-md-6 col-lg-6 mobile">
            <img src={ME} alt="me"/>
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <h5>Hello I'm,</h5>
            <h1>Etang Kencliff Andock</h1>
            <h4 className="text-light-primary">Full-stack Web Developer</h4>
            <CTA />
            <HeaderSocials />
          </div>
          
          <div className="my-image col-12 col-md-6 col-lg-6 desktop">
            <img src={ME} alt="me"/>
          </div>
        </div>
      </div>
        
      
    </header>
  )
}

export default Header