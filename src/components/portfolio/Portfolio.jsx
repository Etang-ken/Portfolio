import React from 'react';
import IMG1 from '../../assets/kblt.png';
import IMG2 from '../../assets/tutor_finder.png';
import IMG3 from '../../assets/employee-info.png';
import IMG4 from '../../assets/blog.png';
import IMG5 from '../../assets/weather.png';
import IMG6 from '../../assets/todo-new.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'KBLT-Show',
      img: IMG1,
      description: 'A website for a talent show that was build as a team to manage contestants\' votes per seasons',
      technologies: 'Bootstrap | Laravel',
      // link: 'https://melodic-boba-111583.netlify.app/',
      github: 'https://github.com/AVN-Group/kblt-voting-platform',
    },
    {
      id: 2,
      title: 'Tutor-Finder-WebApp',
      img: IMG2,
      description: 'This is a web application that makes it possible for students to locate highly experienced private tutors',
      technologies: 'Bootstrap | React | NodeJs',
      // link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Etang-ken/online_tutor_search',
    },
    {
      id: 3,
      title: 'Employee-Info',
      img: IMG3,
      description: 'A web application that does the CRUD (create, read, update, and delete) operation on employee info',
      technologies: 'React | NodeJs',
      // link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Etang-ken/Mern-Employee-info',
    },
    {
      id: 4,
      title: 'A-Blog',
      img: IMG4,
      description:
        'Laravel blog that lets only authenticated users to create, read, update and delete a blog and its comments, and every other non-authenticated user can view blog posts only',
      technologies: 'Bootstrap | Laravel',
      // link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Etang-ken/Weather-App',
    },
    {
      id: 5,
      title: 'Weather-Web-App',
      img: IMG5,
      description: 'Web application that lets a user see and know the climatic condition of any city in the world',
      technologies: 'JavaScript | CSS',
      // link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Etang-ken/Laravel-Blog-Project',
    },
    {
      id: 6,
      title: 'To-Do-List',
      img: IMG6,
      description: 'A simple javascript to-do list with bootstrap styling',
      technologies: 'Bootstrap | Javascript',
      // link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/Etang-ken/Todo-List',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} height="100%" />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <button
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
