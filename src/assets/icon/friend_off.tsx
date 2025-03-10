import React from 'react';

const FriendOff: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11.5205" cy="9.25" r="4.25" stroke="black" />
    <path
      d="M20.75 26H2.77096C2.60215 22.6667 3.37871 16 7.83548 16H15.4323C19.6865 16 20.75 22.6667 20.75 26Z"
      stroke="black"
    />
    <path
      d="M20.25 16C21.3927 16 22.3358 16 24.0239 16C28.2048 16 29.25 22.6667 29.25 26H23.2567"
      stroke="black"
      strokeLinecap="square"
    />
    <path
      d="M17.25 12.75C18.05 13.35 19.4167 13.5 20 13.5C21.75 13.5 24 12.25 24 9.25C24 6.25 21.75 5 20 5C18.6 5 17.5833 5.5 17.25 5.75"
      stroke="black"
      strokeLinecap="square"
    />
  </svg>
);

export default FriendOff;
