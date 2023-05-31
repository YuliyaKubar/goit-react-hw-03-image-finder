import { Component } from 'react';

export class Modal extends Component {
  onClose = e => {
    if (e.code === 'Escape') {
      this.props.onModalClick();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onClose);
  }

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClick();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}
