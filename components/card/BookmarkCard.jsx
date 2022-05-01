import Image from 'next/image';
import { BookmarkBtn } from '..';
import { dots } from '../../public/assets/bookmark';

const BookmarkCard = ({ img, title, info }) => {
  return (
    <div>
      <div className='img'>
        <Image src={img} alt='browserLogo' className='cardImage' />
      </div>
      <div className='cardbody'>
        <h3 className='cardTitle'>{title}</h3>
        <p>{info}</p>
      </div>
      <Image src={dots} alt='browserLogo' className='bgDots' />
      <BookmarkBtn primary />
    </div>
  );
};
export default BookmarkCard;
