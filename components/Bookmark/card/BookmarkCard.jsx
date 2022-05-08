import Image from 'next/image';
import { Dots, ChromeLogo } from '../../../public/bookmark';
import { StyledBtn as Button } from '../..';
const BookmarkCard = ({ children, title, info, btnText }) => {
  return (
    <div>
      <div className='img'>{children}</div>
      <div className='cardBody'>
        <h3 className='cardTitle'>{title}</h3>
        <p>{info}</p>
      </div>
      <Dots />
      <Button primary className='btn'>
        {btnText}
      </Button>
    </div>
  );
};
export default BookmarkCard;
