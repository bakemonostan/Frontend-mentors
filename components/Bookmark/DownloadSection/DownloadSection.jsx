import BookMarkCard from '../card/BookmarkCard';
import chrome from '../../../public/bookmark/logo-chrome.svg';

const DownloadSection = () => {
  return (
    <div>
      <h3>Download</h3>
      <BookMarkCard
        img={chrome}
        title='Add to Chrome'
        info='Lorem ipsum dolor sit'
        btnText='Add and install extension'
      />
    </div>
  );
};
export default DownloadSection;
