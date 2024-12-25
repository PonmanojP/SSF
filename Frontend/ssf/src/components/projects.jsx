import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);  // State to hold project data

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/projects/'); // Your Django endpoint
        const data = await response.json();
        setProjects(data);  // Set the fetched data into the state
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    
    fetchProjects(); // Call the fetch function
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

      <h1>Reach us here</h1>
      <ul className='socials'>
        <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  );
};

export default Projects;
