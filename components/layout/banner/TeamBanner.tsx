import React from 'react';
import titanBanner from "@/public/images/teams/banners/Titans Banner.jpg";
import titanLogo from "@/public/images/teams/logo/Titans.png";

import codeRedBanner from "@/public/images/teams/banners/Code Red Banner.jpg";
import codeRedLogo from "@/public/images/teams/logo/Code Red.png";

import darkRogersBanner from "@/public/images/teams/banners/Dark Rogers Banner.jpg";
import darkRogersLogo from "@/public/images/teams/logo/Dark Rogers.png";

import teamBaddiesBanner from "@/public/images/teams/banners/Team Baddies Banner.jpg";
import teamBaddiesLogo from "@/public/images/teams/logo/Team Baddies.png";

import smashersBanner from "@/public/images/teams/banners/Smashers Banner.jpg";
import smashersLogo from "@/public/images/teams/logo/Smashers.png";

import venpuraBanner from "@/public/images/teams/banners/Venpura Banner.jpg";
import venpuraLogo from "@/public/images/teams/logo/Venpura.png";

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
      <>
      <AboutTextSlider text="DARK ROGERS"/>
      <div className=" parallax-img text-center">
        <Image
          src={darkRogersBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <TeamCraft no={3} name={'Dark Rogers'} players="Maxwel / Premthas" rank={'N/A'} logo={darkRogersLogo} color='#712ebe'/>
      </>
      <>
      <AboutTextSlider text="TEAM BADDIES"/>
      <div className=" parallax-img text-center">
        <Image
          src={teamBaddiesBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <TeamCraft no={4} name={'Team Baddies'} players="Bona / Thusyanthan" rank={'N/A'} logo={teamBaddiesLogo} color='#d62750'/>
      </>
      <>
      <AboutTextSlider text="SMASHERS"/>
      <div className=" parallax-img text-center">
        <Image
          src={smashersBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <TeamCraft no={5} name={'Smashers'} players="Diron / Dilushan" rank={'N/A'} logo={smashersLogo} color='#7103a4'/>
      </>
      <>
      <AboutTextSlider text="VENPURA"/>
      <div className=" parallax-img text-center">
        <Image
          src={venpuraBanner}
          alt="Team Banner"
          priority
          layout="responsive"
        />
          
      </div>
      <TeamCraft no={6} name={'Venpura'} players="Kathires / Kumar" rank={'N/A'} logo={venpuraLogo} color='#ffffff'/>
      </>
    </section>
  );
};

export default TeamBanner;
