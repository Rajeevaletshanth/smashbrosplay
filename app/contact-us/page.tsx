import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import ContactSection from "@/components/containers/ContactSection";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import FooterFour from "@/components/layout/footer/FooterFour";
import FooterThree from "@/components/layout/footer/FooterThree";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="Contact Us" />
        <ContactSection />
      </main>
      <FooterFour />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
