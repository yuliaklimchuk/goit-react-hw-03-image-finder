import style from './imageGallery.module.css';
import { ImageGalleryItem } from "./ImageGalleryItem";


export const ImageGallery = ({ images})=>{ 
    return (
        <ul className={style.gallery}> 
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} />
            ))}
    </ul>);
}
