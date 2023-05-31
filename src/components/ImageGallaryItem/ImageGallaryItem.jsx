export const ImageGallaryItem = ({ webformatURL, tags }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} width="300" />
    </li>
  );
};
