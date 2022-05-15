import style from './imageGalleryItem.module.css'

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => { 
    return (
        <li className={style.galleryItem}>
            <img src={ webformatURL} alt={tags} className={ style.image}/>
        </li>
    )
}