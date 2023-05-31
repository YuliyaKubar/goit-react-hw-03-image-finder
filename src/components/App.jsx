import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { getImages } from 'api/api';
import { getNormalizedImages } from 'helpers/getNormalizedImages';
import { ImageGallary } from './ImageGallary/ImageGallary';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    hitsImages: [],
  };
  onSubmit = query => {
    this.setState({ query, page: 1, hitsImages: [] });
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
    const {
      data: { hits, totalHits },
    } = await getImages({
      query: this.state.query,
      page: this.state.page,
    });
    this.setState(prevState => ({
      hitsImages: [...prevState.hitsImages, getNormalizedImages(hits)],
    }));
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallary hitsImages={this.state.hitsImages} />
        <Button onClick={this.loadMoreClick} />
      </>
    );
  }
}
