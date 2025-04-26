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
import PointsTable from "@/components/containers/pointsTable/PointsTable";
import Fixtures from "@/components/containers/home-two/Fixtures";
import Results from "@/components/containers/home-two/Results";
import Brackets from "@/components/containers/brackets/Brackets";
import VideoSection from "@/components/containers/home/VideoSection";
import CoinFlipper from "@/components/containers/pointsTable/CoinFlipper";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        {/* <AboutBanner /> */}
        <HomeSevenBanner />
        {/* <CommonBanner title="Tournaments" /> */}
        <Sponsor />
        {/* <AboutPoster /> */}
        <AboutCraft />
        <PointsTable />
        {/* <CoinFlipper /> */}
        {/* <Brackets /> */}
        {/* <AboutTextSlider text='PLAYOFFS' /> */}
        {/* <AboutOverview />
        <AboutTool /> */}
        <Fixtures />
        <Results />
        {/* <VideoSection /> */}
        <div style={{padding:'100px'}}></div>
      </main>
      <FooterFour />
      <InitCustomCursor />
      {/* <ScrollProgressButton /> */}
      <Animations />
    </div>
  );
};

export default page;
