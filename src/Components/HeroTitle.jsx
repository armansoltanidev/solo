const HeroTitle = ({ text }) => {
  return (
    <h1 className="text-4xl font-extrabold text-center leading-10 text-[#272e35] md:text-left md:text-6xl md:max-w-xl">
      {text}
    </h1>
  );
};

export default HeroTitle;
