import Link from 'next/link';
import styles from './button.module.css';
const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
export default Button;
