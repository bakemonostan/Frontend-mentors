import Image from 'next/image';
import { Dots } from '../../../public/bookmark';
import { StyledBtn as Button, StyledCard as Wrapper } from '../..';
const BookmarkCard = ({ children, title, info, btnText }) => {
  return (
    <Wrapper>
      <div className='img'>{children}</div>
      <div className='cardBody'>
        <h3 className='cardTitle'>{title}</h3>
        <p>{info}</p>
      </div>
      <Dots className='bgDots' />
      <Button primary className='btn'>
        {btnText}
      </Button>
    </Wrapper>
  );
};
export default BookmarkCard;
