import React from 'react';

const Clock = props => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <defs />
    <g id="Layer_2" data-name="Layer 2">
      <g id="icon">
        <path
          className="cls-1"
          d="M512 1024A512.12 512.12 0 0 1 312.7 40.25a512.12 512.12 0 0 1 398.6 943.5A508.73 508.73 0 0 1 512 1024zm0-960a448.13 448.13 0 0 0-174.37 860.81A448.13 448.13 0 0 0 686.37 99.19 445.2 445.2 0 0 0 512 64z"
        />
        <path
          className="cls-1"
          d="M656 793.42a32 32 0 0 1-27.74-16L484.29 528a32 32 0 0 1-4.29-16V160a32 32 0 0 1 64 0v343.43l139.71 242a32 32 0 0 1-27.68 48z"
        />
      </g>
    </g>
  </svg>
);

export default Clock;
