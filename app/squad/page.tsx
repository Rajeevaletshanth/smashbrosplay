import SignInSection from "@/components/containers/authentication/SignInSection";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Header from "@/components/layout/header/Header";
import CaseStudySeven from "@/components/containers/home-seven/CaseStudySeven";
import AboutTextSlider from "@/components/containers/about/AboutTextSlider";
import SquadBanner from "@/components/layout/banner/SquadBanner";
import FooterFour from "@/components/layout/footer/FooterFour";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
      <SquadBanner title="Squad" description="From fresh faces to top-tier legends"/>
      <AboutTextSlider text='SQUAD' />
        <CaseStudySeven/>
      </main>
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
      <FooterFour />
    </div>
  );
};

export default page;
