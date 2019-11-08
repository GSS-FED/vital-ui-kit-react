import React from 'react';

export const Sort = ({ iconType }) => {
  let upColor = undefined;
  let downColor = undefined;
  switch (iconType) {
    case 'asc':
      upColor = '#43434B';
      downColor = '#DEDEE2';
      break;
    case 'desc':
      upColor = '#DEDEE2';
      downColor = '#43434B';
      break;
    case 'init':
    default:
      upColor = '#DEDEE2';
      downColor = '#DEDEE2';
      break;
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fad"
      data-icon="sort-up"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <g>
        <path
          fill={upColor}
          d="M24.05 183.05l119.1-119A23.9 23.9 0 0 1 177 64a.94.94 0 0 1 .1.1l119 119c15.1 15.1 4.4 41-17 41h-238c-21.45-.05-32.1-25.95-17.05-41.05z"
        />
        <path
          fill={downColor}
          d="M41.05 288.05h238c21.4 0 32.1 25.9 17 41l-119 119a23.9 23.9 0 0 1-33.8.1l-.1-.1-119.1-119c-15.05-15.05-4.4-41 17-41z"
        />
      </g>
    </svg>
  );
};
