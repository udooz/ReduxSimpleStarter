import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBnHW-5n6JWH5YIFmGTfZjRIrrLs0IeL4w';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'))
