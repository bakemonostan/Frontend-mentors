import Image from 'next/image';
import { BookmarkBtn, StyledCard as Wrapper } from '..';
import { dots } from '../../public/bookmark';

const BookmarkCard = ({ img, title, info, btnText }) => {
  return (
    <Wrapper>
      <div className='img'>
        <Image src={img} alt='browserLogo' className='cardImage' />
      </div>
      <div className='cardBody'>
        <h3 className='cardTitle'>{title}</h3>
        <p>{info}</p>
      </div>
      <Image src={dots} alt='browserLogo' className='bgDots' />
      <BookmarkBtn primary className='btn'>
        {btnText}
      </BookmarkBtn>
    </Wrapper>
  );
};
export default BookmarkCard;
