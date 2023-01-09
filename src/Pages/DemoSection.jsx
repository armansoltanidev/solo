import { TextBodyLight, Title } from '../Components';
import ButtonOutline from '../Components/BottonOutline';
import DemoImg from '../img/illustration-demo.png';
function DemoSection() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="card relative text-center bg-[#2C353D] p-5 rounded-3xl">
        <div className="ellipse"></div>
        <div className="wrapper flex flex-col md:flex-row-reverse md:items-center md:justify-center md:gap-16">
          <div className="card__content flex flex-col items-center gap-2">
            <Title className="text-white mt-3">Keeping it all together</Title>
            <TextBodyLight className="my-4 text-[#6A7986]">
              Just invite your team, Solo does all the heavy-lifting.
            </TextBodyLight>
            <ButtonOutline className="z-10">Schedule a demo</ButtonOutline>
          </div>
          <div className="card__img flex justify-center my-6">
            <img src={DemoImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoSection;
