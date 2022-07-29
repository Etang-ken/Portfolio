import React from 'react';
// import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaServer, FaDev, FaPaintBrush, FaPenNib, FaHtml5, FaCss3,  FaJs, FaBootstrap, FaReact, FaJsSquare, FaVuejs,
          FaPhp, FaLaravel, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa'
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development<FaDev className='experience__header-icon ms-3'/></h3>
          <div className="experience__content">
          <div className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </div>
            <div className="experience__details">
              <FaCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </div>
            <div className="experience__details">
              <FaJs className="experience__details-icon" />
              <h4>JavaScript</h4>
            </div>
            <div className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </div>
            <div className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>ReactJS</h4>
            </div>
            <div className="experience__details">
              <FaJsSquare className="experience__details-icon" />
              <h4>jQuery</h4>
            </div>
            <div className="experience__details">
              <FaVuejs className="experience__details-icon" />
              <h4>VueJS</h4>
            </div>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-end Development <FaServer className='experience__header-icon ms-3'/></h3>
          <div className="experience__content">
            <div className="experience__details">
              <FaPhp className="experience__details-icon" />
              <h4>PHP</h4>
            </div>
            <div className="experience__details">
              <FaLaravel className="experience__details-icon" />
              <h4>Laravel</h4>
            </div>
            <div className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>NodeJS</h4>
            </div>
            <div className="experience__details">
              <FaJs className="experience__details-icon" />
              <h4>ExpressJS</h4>
            </div>
            <div className="experience__details">
              <FaDatabase className="experience__details-icon" />
              <h4>MySQL</h4>
            </div>
            <div className="experience__details">
              <FaDatabase className="experience__details-icon" />
              <h4>MongoDB</h4>
            </div>
            <div className="experience__details">
              <FaGithub className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </div>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Design Tools-UI/UX <FaPaintBrush className='experience__header-icon ms-3'/></h3>
          <div className="experience__content">
            <div className="experience__details">
              <FaPenNib className="experience__details-icon" />
              <h4>Adobe XD</h4>
            </div>
            <div className="experience__details">
              <FaPenNib className="experience__details-icon" />
              <h4>Adobe Photoshop</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience