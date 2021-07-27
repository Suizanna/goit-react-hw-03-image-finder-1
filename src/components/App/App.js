import React, { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { Spinner } from '../Spinner/Spinner';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Api } from '../services/apiService';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    selectedImage: null,
    status: 'idle',
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ status: 'pending' });

      try {
        const images = await Api.getImages(searchQuery, page);

        if (!images.length) {
          throw new Error();
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({ error, status: 'rejected' });
        toast.error('Enter a valid search query');
      }

      page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    }
  }

  onSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    } else {
      this.setState({
        searchQuery: '',
        page: 1,
        images: [],
      });
    }
    this.setState({ searchQuery });
  };

  //Modal
  onModalClose = () => {
    this.setState({ selectedImage: null });
    document.body.classList.remove('modal-open');
  };

  onImageSelect = (src, alt) => {
    this.setState({ selectedImage: { src, alt } });
    document.body.classList.add('modal-open');
  };

  //кнопка загрузить еще
  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, selectedImage, status } = this.state;
    const pending = status === 'pending';
    const resolved = status === 'resolved';
    return (
      <Container>
        <SearchBar onSubmit={this.onSubmit} />

        {images.length > 0 && (
          <ImageGallery images={images} onImageSelect={this.onImageSelect} />
        )}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.onModalClose} />
        )}
        {pending && <Spinner />}
        {resolved && images.length >= 12 && (
          <Button name="Load more" onClick={this.onLoadMore} />
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
