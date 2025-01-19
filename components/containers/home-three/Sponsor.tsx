"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import team1 from "@/public/images/teams/logo/Titans.png";
import team2 from "@/public/images/teams/logo/Code Red.png";
import team3 from "@/public/images/teams/logo/Dark Rogers.png";
import team4 from "@/public/images/teams/logo/Team Baddies.png";

const Sponsor = ({color}:any) => {
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
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team1} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team2} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team3} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team4} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team1} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team2} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team3} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team4} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team3} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team4} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team1} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team2} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team3} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team4} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team4} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team1} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team2} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team3} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsor__single text-center">
            <Image src={team4} alt="Image" priority width={190} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponsor;
