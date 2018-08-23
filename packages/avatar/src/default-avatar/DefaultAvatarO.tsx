import React from 'react';

const DefaultAvatarO = props => (
  <svg viewBox="0 0 124 124" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#7189B6" d="M0 0h124v124H0z" />
      <g transform="translate(30 24)" stroke="#FFF" strokeWidth={4}>
        <circle cx={32} cy={16} r={16} />
        <path
          d="M64 76c0-17.673-14.327-32-32-32C14.327 44 0 58.327 0 76"
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
);

export default DefaultAvatarO;
