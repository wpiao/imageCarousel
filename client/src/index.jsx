import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const listingID = '32';
const url = `http://localhost:3000/gallery/${listingID}`;

ReactDOM.render(<App url={url} />, document.getElementById('app'));