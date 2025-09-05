import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const nav = {
  'Главная': '/index',
  'Новости': '/new',
  'О компании': '/about',
  'Магазин': '/shop',
  'Контакты': '/contacts',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App navigation={nav} />
  </React.StrictMode>
);

reportWebVitals();