import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.head}>Features</h3>
      <p className={styles.details}>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>
  );
};
export default Features;
