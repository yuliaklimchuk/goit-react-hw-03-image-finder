import { Component } from "react";
import style from './imageGallery.module.css';
import { ImageGalleryItem } from "./ImageGalleryItem";
import { Loader } from "./Loader";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '25800481-71cffbd2e779364a85bf72062';

export class ImageGallery extends Component { 
    state = {
        images: [],
        loading: false,
    }
    componentDidUpdate(prevProps, prevStates) { 
        const nextName = this.props.imageName;
        if (prevProps.imageName !== nextName) { 
            this.setState({loading: true});
            setTimeout(() => { 
                            fetch(`${BASE_URL}?q=${nextName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(images => this.setState({ images: images.hits }))
                .finally(() => this.setState({ loading: false }))
            },2000);
        }
    }
    render() { 
        const { images, loading } = this.state;
        return (<div>
            { loading && <Loader />}
            <ul className={style.gallery}>
            {(images.length !== 0) &&  
                images.map(({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags}/>
                ))}
            </ul>
            </div>);
    }
}