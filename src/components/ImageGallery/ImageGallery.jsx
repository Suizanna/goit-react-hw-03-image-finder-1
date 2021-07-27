import PropTypes from "prop-types";
import { List } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onImageSelect }) => {
  return (
    <List>
      {images.map((image) => {
        const { id, webformatURL, largeImageURL, tags } = image;

        return (
          <ImageGalleryItem
            key={id}
            previewImage={webformatURL}
            tags={tags}
            onImageSelect={() => {
              onImageSelect(largeImageURL, tags);
            }}
          />
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageSelect: PropTypes.func.isRequired,
};