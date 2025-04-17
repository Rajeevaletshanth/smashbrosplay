import React from 'react';
import sharksBanner from "@/public/images/teams/banners/Sharks Cover.jpg";
import sharksLogo from "@/public/images/teams/logo/Sharks.png";


import Image from 'next/image';
import AboutCraft from '@/components/containers/about/AboutCraft';
import TeamCraft from '@/components/containers/about/TeamCraft';
import AboutTextSlider from '@/components/containers/about/AboutTextSlider';

const TeamBanner = () => {
  return (
    <section className='section bg-black'>
      <>
      <AboutTextSlider text="SHARKS"/>
      <div className=" parallax-img text-center">
        <Image
          src={sharksBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      {/* <TeamCraft no={1} name={'SHARKS'} players="Thenushkan / Millington" rank={'N/A'} logo={sharksLogo} color='#0a63bd'/> */}
      
      </>

    </section>
  );
};

export default TeamBanner;
