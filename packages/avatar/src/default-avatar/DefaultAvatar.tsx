import React from 'react';

const DefaultAvatar = props => (
  <svg viewBox="0 0 124 124" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h124v124H0z" fill="#7189B6" />
      <circle fill="#FFF" cx={62} cy={41} r={18} />
      <path
        d="M28 102c0-19.882 15.222-36 34-36s34 16.118 34 36H28z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default DefaultAvatar;
