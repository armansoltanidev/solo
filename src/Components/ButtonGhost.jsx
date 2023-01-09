import React from 'react';

export default function ButtonGhost({ text }) {
  return (
    <button className="py-3 px-8 z-10 mt-5 text-[#272e35de] border-2 border-[#272e35de] hover:text-[#272e35] hover:border-[#272e35de] font-bold rounded-2xl">
      {text}
    </button>
  );
}
