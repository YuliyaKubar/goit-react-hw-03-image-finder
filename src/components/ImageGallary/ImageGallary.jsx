import { ImageGallaryItem } from 'components/ImageGallaryItem/ImageGallaryItem';

export const ImageGallary = ({ hitsImages, onImageClick }) => {
  return (
    <ul className="ImageGallery">
      {hitsImages.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGallaryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onImageClick={onImageClick}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
