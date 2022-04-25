import React from "react";

const ArrowTopIcon = (props) => {
  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="2" />
      <path
        d="M25.7071 12.2929C25.3166 11.9024 24.6834 11.9024 24.2929 12.2929L17.9289 18.6569C17.5384 19.0474 17.5384 19.6805 17.9289 20.0711C18.3195 20.4616 18.9526 20.4616 19.3431 20.0711L25 14.4142L30.6569 20.0711C31.0474 20.4616 31.6805 20.4616 32.0711 20.0711C32.4616 19.6805 32.4616 19.0474 32.0711 18.6569L25.7071 12.2929ZM26 36L26 13L24 13L24 36L26 36Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowTopIcon;
