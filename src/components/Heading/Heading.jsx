import React, { useEffect, useRef, useState } from 'react';
import styles from './Heading.module.css';

const Heading = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false); // Track visibility
    const headingRef = useRef(null); // Reference for the heading

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set state when in view
                    observer.disconnect(); // Stop observing after element is visible
                }
            },
            { threshold: 0.8 } // Trigger when 30% of the element is visible
        );

        if (headingRef.current) {
            observer.observe(headingRef.current); // Observe the heading
        }

        return () => {
            if (headingRef.current) {
                observer.unobserve(headingRef.current); // Cleanup observer on unmount
            }
        };
    }, []);

    return (
        <>
            <h1
                ref={headingRef}
                className={`${styles.heading} ${isVisible ? styles.visible : styles.hidden}`}
            >
                {text}
            </h1>

            <p className={`${styles.subHeading} ${isVisible ? styles.visible : styles.hidden}`}>
                Currently, We are Software Engineers
            </p>

            <p className={`${styles.description} ${isVisible ? styles.visible : styles.hidden}`}>
                As a team of software engineers with over an year of combined experience, we specialize in building robust and scalable applications that enhance user experiences and drive business success. Our passion lies in leveraging technology to solve complex problems and deliver high-quality software solutions that align with user needs and organizational objectives.
            </p>
        </>
    );
};

export default Heading;
