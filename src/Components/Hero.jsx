import React from 'react';
import SubTitle from '../Components/SubTitle';
import HeroTitle from '../Components/HeroTitle';
import TextBody from '../Components/TextBody';
import Button from '../Components/Button';
import ButtonGhost from '../Components/ButtonGhost';
import Illustration from '../img/illustration.png';
import Navbar from './Navbar';
function Hero() {
  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <Navbar />
        <div className="wrapper flex flex-col md:flex-row mt-10 md:justify-between">
          <main className="flex flex-col gap-4 md:gap-6">
            <SubTitle text="Risk - Free 30 Day Trial" />
            <HeroTitle text="The best way to organize your work." />

            <TextBody text=" Organize your tasks, lists and reminders in one app." />

            <div className="flex flex-col md:flex-row md:gap-4 items-center">
              <Button text="Try it free" />
              <ButtonGhost text="Watch how it works" />
            </div>
          </main>

          <div className="flex justify-center">
            <img src={Illustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
