import  { useState, useRef, useEffect } from "react";
import styles from "./Skills.module.css";
import skill from "/Skills.svg";

function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Stop observing after the element is in view
                    }
                });
            },
            { threshold: 0.45 } // Trigger when 30% of the component is visible
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`${styles.container} ${isVisible ? styles.animate : ""}`}
            ref={skillsRef}
        >
            <img src={skill} alt="Skill Icon" className={styles.skillImage} />
        </div>
    );
}

export default Skills;
