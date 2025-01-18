import Header from "@/components/layout/header/Header";
import AboutBanner from "@/components/layout/banner/AboutBanner";
import AboutTextSlider from "@/components/containers/about/AboutTextSlider";
import AboutPoster from "@/components/containers/about/AboutPoster";
import AboutCraft from "@/components/containers/about/AboutCraft";
import AboutOverview from "@/components/containers/about/AboutOverview";
import AboutTool from "@/components/containers/about/AboutTool";
import Sponsor from "@/components/containers/home-three/Sponsor";
import Review from "@/components/containers/home-two/Review";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import HomeTwoBanner from "@/components/layout/banner/HomeTwoBanner";
import HomeThreeBanner from "@/components/layout/banner/HomeThreeBanner";
import HomeFourBanner from "@/components/layout/banner/HomeFourBanner";
import HomeFiveBanner from "@/components/layout/banner/HomeFiveBanner";
import HomeSevenBanner from "@/components/layout/banner/HomeSevenBanner";
import FooterFour from "@/components/layout/footer/FooterFour";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import HomeSixBanner from "@/components/layout/banner/HomeSixBanner";
import TeamBanner from "@/components/layout/banner/TeamBanner";
import HomeBanner from "@/components/layout/banner/HomeBanner";

const page = () => {
  return (
    <div className="">
      <Header />
      <main>
        <HomeSevenBanner title="Teams"/>
        {/* <CommonBanner title="Teams" /> */}
        <AboutTextSlider text="TEAMS"/>
        <TeamBanner />
        {/* <AboutPoster /> */}
        {/* <AboutCraft /> */}
        {/* <AboutOverview />
        <AboutTool />
        <Sponsor />
        <Review /> */}
        {/* <div style={{padding:'100px'}}></div> */}
      </main>
      {/* <FooterFour />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations /> */}
    </div>
  );
};

export default page;
