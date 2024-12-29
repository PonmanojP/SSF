import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState({});
  const [loadingSocials, setLoadingSocials] = useState(true);

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://ssfoundation.pythonanywhere.com/api/projects/');
        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Fetch socials
  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const response = await fetch('https://ssfoundation.pythonanywhere.com/api/socials/');
        const data = await response.json();
        setSocials(data[0]); // Assuming the API returns an object like { mobile: ..., whatsapp: ..., mail: ..., instagram: ..., facebook: ... }
        console.log(data);
      } catch (error) {
        console.error('Error fetching socials:', error);
      } finally {
        setLoadingSocials(false);
      }
    };

    fetchSocials();
  }, []);

  return (
    <div className='projects-container'>
      <h1>Our Projects</h1>
      <div className='projects-inner'>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="book">
              <p>{project.description}</p>
              <div className="cover">
                <img src={project.picture} alt={project.description} />
              </div>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>

      <h1>Reach Us Here</h1>
      <ul className='socials'>
        {loadingSocials ? (
          <p>Loading socials...</p>
        ) : (
          <>
            {socials.mobile && (
              <li>
                <a href={`tel:${socials.mobile}`}>
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                </a>
              </li>
            )}
            {socials.whatsapp && (
              <li>
                <a href={`https://wa.me/${socials.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                </a>
              </li>
            )}
            {socials.mail && (
              <li>
                <a href={`mailto:${socials.mail}`}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </li>
            )}
            {socials.instagram && (
              <li>
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            )}
            {socials.facebook && (
              <li>
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default Projects;
