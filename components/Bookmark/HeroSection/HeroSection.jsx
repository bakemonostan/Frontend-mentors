import { StyledBtn } from '../..';
import styles from './HeroSection.module.css';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInfo}>
        <h1 className={styles.heroHeading}>A simple bookmark manager</h1>
        <p className={styles.heroDetails}>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your site load instantly. Try it for free
        </p>
        <div className={styles.heroBtn}>
          <StyledBtn>Get it on Chrome</StyledBtn>
          <StyledBtn fontColor='black' color='white'>
            Get it on firefox
          </StyledBtn>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          src='/bookmark/illustration-hero.svg'
          alt='hero image'
          width={650}
          height={500}
        />
      </div>
    </section>
  );
};
export default HeroSection;
