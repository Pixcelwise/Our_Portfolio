
import styles from './Headline.module.css';
import Me from "/Me.svg";
import Eclipse from "/ellipse.svg";
import Gradient from "/Gradient.svg";

const CoverJudgment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.avatarSection}>
                <div className={styles.container}>
                    <img className={styles.gradient} src={Gradient} alt="Gradient" />
                    <img className={styles.ellipse} src={Eclipse} alt="Eclipse" />
                    <img className={styles.me} src={Me} alt="Me" />
                </div>
            </div>

            <div className={styles.textSection}>
                <p className={styles.smallText}>A Developer who</p>
                <h1 className={styles.mainHeading}>
                    Judges a book<br />
                    by its <span className={styles.coverText}>cover...</span>
                </h1>
                <p className={styles.subText}>
                    Because if the cover does not impress you, what else can?
                </p>
            </div>
        </div>
    );
};

export default CoverJudgment;
