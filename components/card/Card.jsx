import Button from '../button/button';
import styles from './Card.module.css';
import Image from 'next/image';

import Link from 'next/link';

const Card = ({ title, details, img, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgBox}>
        <Image className={styles.cardImg} src={img} alt='project image' />
      </div>
      <div className={styles.content}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardDetails}>{details}</p>
        {children}
      </div>
    </div>
  );
};
export default Card;
