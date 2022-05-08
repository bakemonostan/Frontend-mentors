import BookmarkCard from '../card/BookmarkCard';
import { ChromeLogo } from '../../../public/bookmark';

const DownloadSection = () => {
  return (
    <div>
      <h3>Download</h3>
      <BookmarkCard title='Chrome' btnText='random' info='info'>
        <ChromeLogo />
      </BookmarkCard>
    </div>
  );
};
export default DownloadSection;
