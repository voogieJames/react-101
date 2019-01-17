import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD:src/App.test.js
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
=======
import ContactsList from './ContactsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactsList />, div);
>>>>>>> 2959e33894587296ed9941faa8c0dccaf137bfe9:src/ContactsList.test.js
  ReactDOM.unmountComponentAtNode(div);
});
