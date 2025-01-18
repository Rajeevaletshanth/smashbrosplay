import React from 'react';
import titanBanner from "@/public/images/teams/banners/Titans Banner.jpg";
import titanLogo from "@/public/images/teams/logo/Titans.png";

import codeRedBanner from "@/public/images/teams/banners/Code Red Banner.jpg";
import codeRedLogo from "@/public/images/teams/logo/Code Red.png";

import Image from 'next/image';
import AboutCraft from '@/components/containers/about/AboutCraft';
import TeamCraft from '@/components/containers/about/TeamCraft';
import AboutTextSlider from '@/components/containers/about/AboutTextSlider';

const TeamBanner = () => {
  return (
    <section className='section bg-black'>
      <>
      <AboutTextSlider text="TITANS"/>
      <div className=" parallax-img text-center">
        <Image
          src={titanBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <TeamCraft no={1} name={'Titans'} players="Justin / Ruban" rank={'N/A'} logo={titanLogo} color='yellow'/>
      
      </>
      <>
      <AboutTextSlider text="CODE RED"/>
      <div className=" parallax-img text-center">
        <Image
          src={codeRedBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <TeamCraft no={2} name={'Code Red'} players="Rajeev / Carson" rank={'N/A'} logo={codeRedLogo} color='red'/>
      </>
    </section>
  );
};

export default TeamBanner;
