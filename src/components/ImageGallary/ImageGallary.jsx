import { ImageGallaryItem } from 'components/ImageGallaryItem/ImageGallaryItem';

export const ImageGallary = ({ hitsImages }) => {
  return (
    <ul className="gallery">
      {hitsImages.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGallaryItem key={id} webformatURL={webformatURL} tags={tags} />
        );
      })}
    </ul>
  );
};
