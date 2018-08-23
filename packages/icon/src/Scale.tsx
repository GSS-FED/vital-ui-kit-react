import React from 'react';

const Scale = props => (
  <svg viewBox="0 0 960 960" width="1em" height="1em" {...props}>
    <path
      d="M864 640h-32V224a95.47 95.47 0 0 0-9.38-41.37l64-64a32 32 0 0 0-45.26-45.26l-64 64A95.47 95.47 0 0 0 736 128H320V96a96 96 0 0 0-192 0v32H96a96 96 0 0 0 0 192h32v416a96.11 96.11 0 0 0 96 96h416v32a96 96 0 0 0 192 0v-32h32a96 96 0 0 0 0-192zm-96 0h-64V301.25l64-64zm-402.75 0L640 365.25V640zm229.5-320L320 594.75V320zM192 96a32 32 0 0 1 64 0v32h-64zM64 224a32 32 0 0 1 32-32h626.75l-64 64H96a32 32 0 0 1-32-32zm192 96v338.75l-64 64V320zm512 544a32 32 0 0 1-64 0v-32h64zm96-96H237.25l64-64H864a32 32 0 0 1 0 64z"
      fill="currentColor"
      data-name="Layer 2"
    />
  </svg>
);

export default Scale;
