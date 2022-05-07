import { StyledBtn } from '../..';
import styles from './HeroSection.module.css';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.infoBox}>
        <h1 className={styles.head}>A simple bookmark manager</h1>
        <p className={styles.details}>
          Organize your bookmark however you like. Our Simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites
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
