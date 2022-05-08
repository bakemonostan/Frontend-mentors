import BookmarkCard from '../card/BookmarkCard';
import { ChromeLogo } from '../../../public/bookmark';
import styles from './DownloadSection.module.css';
const DownloadSection = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.head}>Download the extension</h3>
      <p className={styles.info}>
        We&apos;ve got more browsers in the pipeline. please do let us know if
        you&apos;ve got a favourite you&apos;d like us to prioritize
      </p>
      <BookmarkCard title='Chrome' btnText='random' info='info'>
        <ChromeLogo />
      </BookmarkCard>
      <BookmarkCard title='Chrome' btnText='random' info='info'>
        <ChromeLogo />
      </BookmarkCard>
      <BookmarkCard title='Chrome' btnText='random' info='info'>
        <ChromeLogo />
      </BookmarkCard>
    </div>
  );
};
export default DownloadSection;
