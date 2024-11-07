import { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';  // Import SweetAlert2

const ContactForm = () => {
    const [message, setMessage] = useState(''); // State for textarea
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const current = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = current.toLocaleDateString('en-US', options);
        setCurrentDateTime(formattedDate);
    }, []);

    const handleTextareaChange = (e) => {
        setMessage(e.target.value); // Update message
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("ReplyMessage: " + message);

        // Send email using EmailJS
        emailjs
            .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, { message }, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Email Sent!',
                        text: 'Your message has been successfully sent.',
                        confirmButtonText: 'OK',
                        customClass: {
                            confirmButton: styles.swalButton,
                        },
                    });
                    setMessage(""); // Clear message only on success
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed...',
                        text: `There was an error sending your message: ${error.text}`,
                        confirmButtonText: 'Retry',
                        customClass: {
                            confirmButton: styles.swalButton,
                        },
                    });
                },
            );
    };

    return (
        <section id='Contact'>
            <div className={styles.card}>
                <div className={styles.header}>
                    <span className={styles.title}>Connect With Us</span>
                </div>
                <div className={styles.commentSection}>
                    <div className={styles.commentBox}>
                        <div className={styles.commentReaction}>
                            <button className={styles.likeButton}>
                                <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#707277" strokeLinecap="round" strokeWidth="2" stroke="#707277" d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" />
                                </svg>
                            </button>
                            <span className={styles.likeCount}>14</span>
                        </div>
                        <div className={styles.commentDetails}>
                            <div className={styles.userInfo}>
                                <div className={styles.avatar}></div>
                                <div>
                                    <span className={styles.userName}>PixcelWise</span>
                                    <p className={styles.timestamp}>{currentDateTime}</p>
                                </div>
                            </div>
                            <p className={styles.commentText}>
                                I&apos;ve been using this product for a few days now and I&apos;m really impressed! The interface is intuitive and easy to use, and the features are exactly what I need to streamline my workflow.
                            </p>
                            <p className={styles.commentText}>
                                (You could be saying this)
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.replySection}>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            placeholder="Reply Us with Your Name and Phone number"
                            className={styles.replyBox}
                            value={message}
                            onChange={handleTextareaChange}
                        ></textarea>
                        <div className={styles.replyButtons}>
                            <button type="button" className={styles.replyButton}><b>B</b></button>
                            <button type="button" className={styles.replyButton}><i>I</i></button>
                            <button type="button" className={styles.replyButton}><u>U</u></button>
                            <button type="button" className={styles.replyButton}>😊</button>
                            <button className={styles.sendButton} type="submit">
                                <svg fill="none" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#ffffff" d="M12 5L12 20" />
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#ffffff" d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
