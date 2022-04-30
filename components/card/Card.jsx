import Button from '../button/button';
import styles from './Card.module.css';
import Image from 'next/image';

import Link from 'next/link';

const Card = ({ title, details, img, children }) => {
  const ProjectDetails = [
    {
      id: 1,
      name: 'Bookmark Landing',
      details:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque cupiditate nisi modi distinctio voluptatem dignissimos est rerum nesciunt illo.',
      previewImg: '../public/assets/bookmark/images/desktop-preview.jpg',
    },
    {
      id: 2,
      name: 'Bookmark Landing',
      details:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque cupiditate nisi modi distinctio voluptatem dignissimos est rerum nesciunt illo.',
      previewImg: '../public/assets/bookmark/images/desktop-preview.jpg',
    },
  ];

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
