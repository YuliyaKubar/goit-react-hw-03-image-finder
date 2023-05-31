export const ImageGallaryItem = ({
  webformatURL,
  tags,
  onImageClick,
  largeImageURL,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        width="300"
        onClick={() => onImageClick({ largeImageURL, tags })}
      />
    </li>
  );
};
