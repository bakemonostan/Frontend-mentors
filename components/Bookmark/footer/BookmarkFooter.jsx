import Logo from '../Bookmark-logo/Logo';
import { footerLogo, twitterIcon, fbIcon } from '../../../public/bookmark';
import Image from 'next/image';
import styles from './footer.module.css';

const BookmarkFooter = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Image width={120} height={20} src={footerLogo} alt='facebook icon' />
        <h4 className={styles.head}>Features</h4>
        <h4 className={styles.head}>Pricing</h4>
        <h4 className={styles.head}>Contact</h4>
      </div>
      <div className={styles.icons}>
        <div className={styles.fbIcon}>
          <Image width={18} height={18} src={fbIcon} alt='facebook icon' />
        </div>

        <div className={styles.twitterIcon}>
          <Image width={18} height={18} src={twitterIcon} alt='twitter icon' />
        </div>
      </div>
    </footer>
  );
};
export default BookmarkFooter;
