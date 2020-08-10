import React from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';

function App() {
  return (
    <div className="App">
      <UserForm />
      <JumboTronComponent body='Test for echo' />
      <Products />
      <GitHub />
    </div>
  );
}

export default App;
