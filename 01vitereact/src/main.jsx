import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUser = ' chai aur react';

const reactElemet = React.createElement(
  'a',
  {href: 'https://google.com', target: '_black'},
  'click me to visit google',
  anotherUser
);

ReactDOM.createRoot(document.getElementById('root')).render(
     reactElemet
    // <App/>
)
