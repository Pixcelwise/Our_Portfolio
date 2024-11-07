import styles from './Customize.module.css'

function Customize() {
    return (
        <section className={styles.newsletter}>
            <h3>Get Your Customized Wallpaper</h3>
            <form className={styles.newsletterForm}>
                <input type="email" placeholder="Your email" aria-label="Email" />
                <input type="text" placeholder="Your requirement" aria-label="Email" />
                <button type="submit">submit</button>
            </form>
        </section>
    )
}

export default Customize
