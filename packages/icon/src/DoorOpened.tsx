import React from 'react';

const DoorOpened = props => (
  <svg viewBox="0 0 960 1024" width="1em" height="1em" {...props}>
    <defs />
    <g id="Layer_2" data-name="Layer 2">
      <g id="icon">
        <path
          className="cls-1"
          d="M544 1024H32a32 32 0 0 1 0-64h512a32 32 0 0 0 32-32V74.42L192 184.14V896a32 32 0 0 1-64 0V184.14a64.27 64.27 0 0 1 46.42-61.54L599.21 1.23A32 32 0 0 1 640 32v896a96.11 96.11 0 0 1-96 96zM928 1024H704a32 32 0 0 1 0-64h224a32 32 0 0 1 0 64z"
        />
        <ellipse
          className="cls-1"
          cx={512}
          cy={512}
          rx={32}
          ry={48}
        />
        <path
          className="cls-1"
          d="M800 928a32 32 0 0 1-32-32V192h-64a32 32 0 0 1 0-64h96a32 32 0 0 1 32 32v736a32 32 0 0 1-32 32z"
        />
      </g>
    </g>
  </svg>
);

export default DoorOpened;
