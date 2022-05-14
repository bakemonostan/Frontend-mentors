import { Arrow } from '../../public/bookmark';
import styles from './faq.module.css';

const FAQs = ({ text }) => {
  return (
    <>
      <div className={styles.faq}>
        <p className={styles.text}>{text}</p>
        <div className={styles.icon} alt='arrow icon'>
          <Arrow />
        </div>
      </div>
    </>
  );
};
export default FAQs;
