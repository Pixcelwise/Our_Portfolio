import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Animation.css'; // Import CSS for animations

const CodeTypingAnimation = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once when in view
        threshold: 0.9,    // Start animation when 50% of the component is visible
    });

    const codeSnippet = `function PixcelWise() {
    console.log('thank you for visiting!');
}`;

    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (inView && currentIndex < codeSnippet.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + codeSnippet[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 100); // Controls typing speed (100ms delay per character)
            return () => clearTimeout(timeout);
        }
    }, [inView, currentIndex, codeSnippet]);

    return (
        <div className="code-container" ref={ref}>
            <pre className="code-snippet">
                {displayedText}
                <span className="cursor">|</span>
            </pre>
        </div>
    );
};

export default CodeTypingAnimation;
