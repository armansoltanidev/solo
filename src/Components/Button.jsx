import React from 'react';

function Button({ text }) {
  return (
    <a
      href="#"
      className="py-3 px-8 mt-5 z-10 text-white bg-[#FF6E30] font-bold rounded-2xl"
    >
      {text}
    </a>
  );
}

export default Button;
