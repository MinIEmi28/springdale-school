// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'; // Add your global styles here

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));   

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>   

// );

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));   


root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App,   
 null)
  )
);