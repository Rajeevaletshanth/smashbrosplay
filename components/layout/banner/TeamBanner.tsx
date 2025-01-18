import React from 'react';
import titanBanner from "@/public/images/teams/banners/Titans Banner.jpg";
import titanLogo from "@/public/images/teams/logo/Titans.png";
import Image from 'next/image';
import AboutCraft from '@/components/containers/about/AboutCraft';
import TeamCraft from '@/components/containers/about/TeamCraft';
import AboutTextSlider from '@/components/containers/about/AboutTextSlider';

const TeamBanner = () => {
  return (
    <section className='section bg-black'>
      {/* <div className="mb-4"></div> */}
      <>
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
        {/* <AboutTextSlider text="TITANS" /> */}
    </section>
  );
};

export default TeamBanner;
