import React from 'react';

const DoorClosed = props => (
  <svg viewBox="0 0 960 1024" width="1em" height="1em" {...props}>
    <defs />
    <g id="Layer_2" data-name="Layer 2">
      <g id="icon">
        <path
          className="cls-1"
          d="M736 1024H32a32 32 0 0 1 0-64h704a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v800a32 32 0 0 1-64 0V96a96.11 96.11 0 0 1 96-96h512a96.11 96.11 0 0 1 96 96v832a96.11 96.11 0 0 1-96 96zM928 1024h-32a32 32 0 0 1 0-64h32a32 32 0 0 1 0 64z"
        />
        <circle className="cls-1" cx={656} cy={512} r={48} />
      </g>
    </g>
  </svg>
);

export default DoorClosed;
