import React from 'react';
import sharksBanner from "@/public/images/teams/banners/Sharks Cover.jpg";
import sharksLogo from "@/public/images/teams/logo/Sharks.png";

import birdiesBanner from "@/public/images/teams/banners/Birdies Cover.jpg";
import birdiesLogo from "@/public/images/teams/logo/Birdies.png";

import lsBanner from "@/public/images/teams/banners/Lambert's Smash Cover.jpg";
import lsLogo from "@/public/images/teams/logo/Lambert's Smash.png";

import exboltsBanner from "@/public/images/teams/banners/Exbolts Cover.jpg";
import exboltsLogo from "@/public/images/teams/logo/Exbolts.png";

import Image from 'next/image';
import AboutCraft from '@/components/containers/about/AboutCraft';
import TeamCraft from '@/components/containers/about/TeamCraft';
import AboutTextSlider from '@/components/containers/about/AboutTextSlider';

const TeamBanner = () => {
  return (
    <section className='section bg-black'>
      <>
      <div className=" parallax-img text-center">
        <Image
          src={sharksBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <AboutTextSlider text="SHARKS"/>
      {/* <TeamCraft no={1} name={'SHARKS'} players="Thenushkan / Millington" rank={'N/A'} logo={sharksLogo} color='#0a63bd'/> */}
      
      </>
      <>
      <div className=" parallax-img text-center">
        <Image
          src={birdiesBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <AboutTextSlider text="BIRDIES"/>
      {/* <TeamCraft no={2} name={'SHARKS'} players="Rubanraj / Kathires" rank={'N/A'} logo={birdiesLogo} color='#0a63bd'/> */}
      
      </>

      <>
      <div className=" parallax-img text-center">
        <Image
          src={lsBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <AboutTextSlider text="LAMBERT'S SMASH"/>
      {/* <TeamCraft no={2} name={'SHARKS'} players="Rubanraj / Kathires" rank={'N/A'} logo={birdiesLogo} color='#0a63bd'/> */}
      
      </>

      <>
      <div className=" parallax-img text-center">
        <Image
          src={exboltsBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <AboutTextSlider text="EXBOLTS"/>
      {/* <TeamCraft no={2} name={'SHARKS'} players="Rubanraj / Kathires" rank={'N/A'} logo={birdiesLogo} color='#0a63bd'/> */}
      
      </>
    </section>
  );
};

export default TeamBanner;
