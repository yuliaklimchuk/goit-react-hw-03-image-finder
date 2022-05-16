import style from './imageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "./ImageGalleryItem";


export const ImageGallery = ({ images})=>{ 
    return (
        <ul className={style.gallery}> 
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} />
            ))}
    </ul>);
}

ImageGallery.propTypes = {
    array: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags:PropTypes.string.isRequired
    }))
};