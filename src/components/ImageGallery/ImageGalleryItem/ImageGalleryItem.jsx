import style from './imageGalleryItem.module.css'
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => { 
    return (
        <li className={style.galleryItem}>
            <img src={ webformatURL} alt={tags} className={ style.image}/>
        </li>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags:PropTypes.string.isRequired
}