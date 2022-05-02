import Logo from '../Bookmark-logo/Logo';
import { fbIcon, twitterIcon, LogoIcon } from '../../public/assets/bookmark';
import Image from 'next/image';
import styles from './footer.module.css';

const BookmarkFooter = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <LogoIcon
          className={styles.logo}
          width={100}
          height={100}
          fill={'red'}
        />
        <Image src={fbIcon} alt='facebook icon' />
        <h3>Features</h3>
        <h3>Pricing</h3>
        <h3>Contact</h3>
        <div className='icons'>
          <Image src={fbIcon} alt='facebook icon' />
          <Image src={twitterIcon} alt='twitter icon' />
        </div>
      </div>
    </footer>
  );
};
export default BookmarkFooter;
