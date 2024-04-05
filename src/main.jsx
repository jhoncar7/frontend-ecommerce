import React from 'react';
import ReactDOM from 'react-dom/client';
import { ComicsApp } from './ComicsApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ComicsApp />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)