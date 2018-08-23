import React from 'react';

const MessageSquareHint = props => (
  <svg viewBox="0 0 1024 832" width="1em" height="1em" {...props}>
    <defs />
    <g id="Layer_2" data-name="Layer 2">
      <g id="icon">
        <path
          className="cls-1"
          d="M928 0H96A96.11 96.11 0 0 0 0 96v480a32 32 0 0 0 64 0V96a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H224a32.06 32.06 0 0 0-17.75 5.37l-192 128a32 32 0 0 0 35.5 53.26L233.69 704H928a96.11 96.11 0 0 0 96-96V96a96.11 96.11 0 0 0-96-96z"
        />
        <path
          className="cls-1"
          d="M512 448a32 32 0 0 0 32-32V192a32 32 0 0 0-64 0v224a32 32 0 0 0 32 32z"
        />
        <circle className="cls-1" cx={512} cy={512} r={35} />
      </g>
    </g>
  </svg>
);

export default MessageSquareHint;
