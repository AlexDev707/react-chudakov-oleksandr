import React from 'react';
import ReactDOM from 'react-dom';


const images = React.createElement(
    'img',
    {
      src: './ImageForReact.jpeg',
      alt: 'ERROR',
      height: '400px',
    },
)

const text = React.createElement(
    'h1',
    {
        className: 'text',
    },
    'Good luck',
)

const block = React.createElement(
    'div',
    {
        className: 'block',
    },
    [images, text], 
);

ReactDOM.render(block, document.getElementById('root'));

