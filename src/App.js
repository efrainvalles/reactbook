import React from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm'

function App() {
  return (
    <div className="App">
      <UserForm />
      <JumboTronComponent body='Test for echo' />
      <Products />
    </div>
  );
}

export default App;
