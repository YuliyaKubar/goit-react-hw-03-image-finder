import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  onChangeForm = e => {
    const value = e.target.value;
    this.setState({ query: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.onChangeForm}
          />
        </form>
      </header>
    );
  }
}
