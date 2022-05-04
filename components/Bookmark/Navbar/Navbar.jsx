import { BkmarkLogo } from '../../../public/bookmark';
import { StyledBtn } from '../..';
// import BookmarkBtn;
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <BkmarkLogo />
      </div>
      <div className={styles.navItems}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Features</li>
          <li className={styles.navListItem}>Pricing</li>
          <li className={styles.navListItem}>Contact</li>
          <li className={styles.navListItem}>
            <StyledBtn color='var(--soft-red)' width='100px'>
              LOG IN
            </StyledBtn>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
