import Image from 'next/image';
import { BookMarkCard as Wrapper, Button } from '../..';
import { Dots } from '../../../public/bookmark';

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
      <Image src={Dots} alt='browserLogo' className='bgDots' />
      <Button primary className='btn'>
        {btnText}
      </Button>
    </Wrapper>
  );
};
export default BookmarkCard;
