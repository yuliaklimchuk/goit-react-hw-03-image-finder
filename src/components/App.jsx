import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './app.module.css';
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Loader } from "./Loader";
import { Button } from "./Button";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '25800481-71cffbd2e779364a85bf72062';

export class App extends Component { 
  state = {
    imageName: '',
    images: [],
    loading: false,
    error: null,
    page: 1
  }
  componentDidUpdate(prevProps, prevStates) { 
    const nextName = this.state.imageName;
      if (prevStates.imageName !== nextName) { 
        this.setState({
          images: [],
          loading: true
        });
        setTimeout(() => {
          fetch(`${BASE_URL}?q=${nextName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              return Promise.reject(
                new Error('Images not found. Please enter a valid value'),
              );
            })
            .then(images => {
              if (images.hits.length === 0) {
                return Promise.reject(
                new Error('Images not found. Please enter a valid value'),
              );
              }
              this.setState({ images: images.hits })
            })
            .catch((error) => this.fetchError(error))
            .finally(() => this.setState({ loading: false }))
        }, 1000);
        this.setState(prev => ({ page: prev.page + 1 }));
        }
    }
  handleFormSubmit = (imageName) => { 
    this.setState({ imageName: imageName, });
  }
  fetchError = (error) => { 
    this.setState({
      images: [],
      error: error
    })
    toast.error(error.message);
  }
  handleButton = () => {
    this.setState(prev => ({
      loading: true,
      page: prev.page + 1
    }));
    const { imageName, page } = this.state;
    fetch(`${BASE_URL}?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              return Promise.reject(
                new Error('Images not found. Please enter a valid value'),
              );
            })
      .then(images => {
        this.setState(prev => ({ images: [...prev.images,...images.hits] }) );
      })
      .catch((error) => this.fetchError(error))
      .finally(() => this.setState({ loading: false }))
  }
  render() { 
    const {images, loading } = this.state;
    return (
      <div className={ style.app}>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        { loading && <Loader />}
        {(images.length !== 0) && <ImageGallery images={images} />}
        {(images.length !== 0) && <Button  handleButton={this.handleButton} />}
      </div>
    )
  }
}
