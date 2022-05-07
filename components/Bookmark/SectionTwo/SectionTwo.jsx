import styles from './SectionTwo.module.css';
import Image from 'next/image';
import { StyledBtn } from '../..';

const SectionTwo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageBox}>
        <Image
          src='/bookmark/illustration-hero.svg'
          alt='hero image'
          width={650}
          height={500}
        />
      </div>
      <div className={styles.infoBox}>
        <h3 className={styles.head}>Boomark in One Click</h3>
        <p className={styles.details}>
          Organize your bookmark however you like. Our Simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites
        </p>
      </div>
      {/* <div className={styles.btn}>
        <StyledBtn>More info</StyledBtn>
      </div> */}
    </section>
  );
};
export default SectionTwo;
