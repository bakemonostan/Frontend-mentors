import { LogoIcon } from '../../public/assets/bookmark';
import Image from 'next/image';

const Logo = () => {
  return <Image src={LogoIcon} alt='bookmark logo' />;
};
export default Logo;
