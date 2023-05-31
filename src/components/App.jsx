import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { getImages } from 'api/api';
import { getNormalizedImages } from 'helpers/getNormalizedImages';
import { ImageGallary } from './ImageGallary/ImageGallary';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    hitsImages: [],
    shownLoadMore: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
    isLoading: false,
  };

  onImageClick = ({ largeImageURL, tags }) => {
    this.setState({ largeImageURL, tags, showModal: true });
  };

  onSubmit = query => {
    this.setState({ query: query.trim(), page: 1, hitsImages: [] });
  };

  loadMoreClick = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query === this.state.query &&
      prevState.page === this.state.page
    ) {
      return;
    }
    if (!this.state.query.trim()) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const {
        data: { hits, totalHits },
      } = await getImages({
        query: this.state.query,
        page: this.state.page,
      });
      this.setState(prevState => ({
        hitsImages: [...prevState.hitsImages, ...getNormalizedImages(hits)],
        shownLoadMore: prevState.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  onModalClick = e => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallary
          hitsImages={this.state.hitsImages}
          onImageClick={this.onImageClick}
        />
        {this.state.shownLoadMore && <Button onClick={this.loadMoreClick} />}
        {this.state.showModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
            onModalClick={this.onModalClick}
          />
        )}
        {this.state.isLoading && <Loader />}
      </>
    );
  }
}
