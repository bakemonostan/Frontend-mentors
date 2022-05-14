import styles from './FaqSection.module.css';
import { FAQ } from '../..';

const FaqSection = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.head}>Frequently asked questions</h3>
      <p className={styles.info}>
        Here are some of our FAQs. If you have any other questions you&apos;d
        like answered please feel free to email us.
      </p>
      <FAQ text='what is a bookmark' />
      <FAQ text='what is a bookmark' />
      <FAQ text='what is a bookmark' />
      <FAQ text='what is a bookmark' />
    </section>
  );
};
export default FaqSection;
