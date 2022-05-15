import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './app.module.css';
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";

export class App extends Component { 
  state = {
    imageName: '',
  }
  handleFormSubmit = (imageName) => { 
    this.setState({ imageName: imageName });
  }
  render() { 
    return (
      <div className={ style.app}>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={ this.state.imageName}/>
      </div>
    )
  }
}
