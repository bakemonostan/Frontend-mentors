import Logo from '../Bookmark-logo/Logo';
import { footerLogo, twitterIcon, fbIcon } from '../../public/assets/bookmark';
import Image from 'next/image';
import styles from './footer.module.css';

const BookmarkFooter = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Image src={footerLogo} alt='facebook icon' />
        <h4 className={styles.head}>Features</h4>
        <h4 className={styles.head}>Pricing</h4>
        <h4 className={styles.head}>Contact</h4>
      </div>
      <div className={styles.icons}>
        <Image src={fbIcon} alt='facebook icon' />

        <Image src={twitterIcon} alt='twitter icon' />
      </div>
    </footer>
  );
};
export default BookmarkFooter;
