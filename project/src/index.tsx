import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const NUMBER_OF_PLACES = 232;

root.render(
  <React.StrictMode>
    <App numberOfPlaces={NUMBER_OF_PLACES} />
  </React.StrictMode>,
);
