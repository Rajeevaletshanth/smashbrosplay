import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import ContactSection from "@/components/containers/ContactSection";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import RegistrationSection from "@/components/containers/RegistrationSection";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="Tournament Registration" />
        <RegistrationSection />
      </main>
      {/* <FooterTwo /> */}
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
