import './App.css';
import React from 'react';
import giphy from '../apis/giphy';
import SearchBar from './SearchBar';
import Button from './Button';
import ImageList from './ImageList';

class App extends React.Component {
  state = { gifs: [] };

  getGiphs = async term => {
    const response = await giphy.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ gifs: response.data.data });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar whenItSubmits={this.getGiphs} />
        <h1>Get giphy!</h1>
        <div className='topBtns'>
          <Button items='Drums' value='Drums' whenItSubmits={this.getGiphs} />
          <Button
            items='Radiohead'
            value='Radiohead'
            whenItSubmits={this.getGiphs}
          />
          <Button
            items='Broad City'
            value='Broad City'
            whenItSubmits={this.getGiphs}
          />
          <Button
            items='The Office'
            value='The Office'
            whenItSubmits={this.getGiphs}
          />
          <Button
            items='Parks n Rec'
            value='Park n Rec'
            whenItSubmits={this.getGiphs}
          />

          <Button
            items='30 Rock'
            value='30 Rock'
            whenItSubmits={this.getGiphs}
          />
        </div>
        <ImageList images={this.state.gifs} />
      </div>
    );
  }
}

export default App;
