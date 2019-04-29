import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //onSubmit is used to prevent the form from submiting when enter is hit
  searchSubmit = e => {
    e.preventDefault();

    this.props.whenItSubmits(this.state.term);
  };

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.searchSubmit} className='ui form icon input'>
          <input
            type='text'
            placeholder='Search gifs'
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <i className='search icon' />
        </form>
      </div>
    );
  }
}

export default SearchBar;
