import styled from 'styled-components';

const SubTitle = ({ text }) => {
  return (
    <>
      <p className="font-extrabold text-center tracking-widest text-[#748fb5] uppercase text-base md:text-left">
        {text}
      </p>
    </>
  );
};

export default SubTitle;
