import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';

const Projects = ({ projects }) => {
    return (
        <section id="Projects">
            <div className="projectdiv">
                <center><h3 className={styles.featuredLabel}>Featured Project</h3></center>
                {projects.map((project, index) => (
                    <ProjectItem project={project} key={index} />
                ))}
            </div>
        </section>
    );
};

const ProjectItem = ({ project }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.6,    // Trigger when 10% of the section is visible
    });

    return (
        <section
            ref={ref}
            className={`${styles.featuredProject} ${inView ? styles.visible : styles.hidden}`}
        >
            <div className={styles.content}>
                <h1 className={styles.projectTitle}>{project.title}</h1>
                <p className={styles.projectDescription}>{project.description}</p>
            </div>
            <div className={styles.projectImage}>
                {/* <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img src={project.imageUrl} alt={`${project.title} Mockup`} />
                </a> */}
                <img src={project.imageUrl} alt={`${project.title} Mockup`} />

            </div>
        </section>
    );
};

export default Projects;
