import { arrow } from '../../public/bookmark';
import Image from 'next/image';
import styles from './faq.module.css';

const faqSection = ({ text }) => {
  return (
    <>
      <div className={styles.faq}>
        <p className={styles.text}>{text}</p>
        <Image className={styles.icon} src={arrow} alt='arrow icon' />
      </div>
    </>
  );
};
export default faqSection;
