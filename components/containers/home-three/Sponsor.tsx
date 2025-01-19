"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import team1 from "@/public/images/teams/logo/Titans.png";
import team2 from "@/public/images/teams/logo/Code Red.png";
import team3 from "@/public/images/teams/logo/Dark Rogers.png";
import team4 from "@/public/images/teams/logo/Team Baddies.png";
import team5 from "@/public/images/teams/logo/Smashers.png";

const Sponsor = ({color}:any) => {

  const teamImages = [team1, team2, team3, team4, team5];

const renderSlides = () => {
  const slides:any = [];
  for (let i = 0; i < 5; i++) {
    teamImages.forEach((team, index) => {
      slides.push(
        <SwiperSlide key={`${i}-${index}`}>
          <div className="sponsor__single text-center">
            <Image src={team} alt={`Image ${index + 1}`} priority width={190} />
          </div>
        </SwiperSlide>
      );
    });
  }
  return slides;
};

  return (
    <div className={`sponsor  overflow-hidden pt-5 ${color && color}` }>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        speed={8000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="sponsor__slider"
        breakpoints={{
          1190: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
        }}
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
};

export default Sponsor;
