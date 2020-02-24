import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Quote from './components/Quote';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Get Quote</h1>
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
