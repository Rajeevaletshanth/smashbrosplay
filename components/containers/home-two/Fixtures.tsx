"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import CodeRed from "@/public/images/teams/logo/Code Red.png";
import Titans from "@/public/images/teams/logo/Titans.png";
import TBaddies from "@/public/images/teams/logo/Team Baddies.png";
import Smashers from "@/public/images/teams/logo/Smashers.png";
import DRogers from "@/public/images/teams/logo/Dark Rogers.png";
import Venpura from "@/public/images/teams/logo/Venpura.png";
import axios from "axios";
import { useEffect, useState } from "react";

const Fixtures = () => {
  const pathname = usePathname();
  const [data, setData] = useState<any>(null)
  const fetchData = async () => {
    try {
      const response: any = await axios.get('https://api.brexe.com/matches/getAll')
      if (response.data.response === 'success') {
        let tdata:any = [];
        response.data.matches.map((item:any) => {
          if(!item.results){
            tdata.push(item)
          }
        })
        setData(tdata.length > 0 ? tdata : null)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    data && <section id="review" className={`section review`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <span className="sub-title-two">Fixtures</span>
              <h2 className="title title-animation">Upcoming Matches</h2>
              {/* <p>
                AI chatbots can generate analytics and insights on user
                interactions,
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              slidesPerGroup={1}
              speed={1200}
              loop={true}
              roundLengths={true}
              centeredSlides={false}
              centeredSlidesBounds={false}
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                el: ".review-pagination",
                clickable: true,
              }}
              breakpoints={{
                992: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                },
              }}
              className="review__slider"
            >
              {data?.map((item: any, key:any) =>
                <SwiperSlide key={key}>
                  <div className="review__slider-single">
                    <div className="card-header">
                      <p className=" px-2 rounded text-black bg-white" style={{ fontSize: 12, fontWeight: 600 }}>{item.match_type}</p>
                      <p className="text-white" style={{ fontSize: 12 }}>Match No: {item.match_no}</p>
                    </div>
                    <div className="review__meta">
                      <div className="thumb">
                        <Image src={
                          item.team_1 === 'Code Red' ? CodeRed :
                            item.team_1 === 'Dark Rogers' ? DRogers :
                              item.team_1 === 'Smashers' ? Smashers :
                                item.team_1 === 'Team Baddies' ? TBaddies :
                                  item.team_1 === 'Venpura' ? Venpura :
                                  Titans
                        } alt={item.team_1} priority />
                        <h5  style={{ whiteSpace: 'nowrap' }}>{item.team_1}</h5>
                      </div>
                      <p className="vs-text">VS</p>
                      <div className="thumb">
                        <Image src={
                          item.team_2 === 'Code Red' ? CodeRed :
                            item.team_2 === 'Dark Rogers' ? DRogers :
                              item.team_2 === 'Smashers' ? Smashers :
                                item.team_2 === 'Team Baddies' ? TBaddies :
                                  item.team_2 === 'Venpura' ? Venpura :
                                  Titans
                        } alt={item.team_2} priority />
                        <h5 style={{ whiteSpace: 'nowrap' }}>{item.team_2}</h5>
                      </div>
                    </div>
                    <div className="mt-4 " style={{ textAlign: 'center', paddingTop: 40 }}>
                      <p className="date" style={{ fontSize: 14 }}>Date: {item.date}</p>
                      <p className="time" style={{ fontSize: 14 }}>Time: {item.time}</p>
                    </div>
                  </div>

                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta">
              <div className="slider-pagination-group slider-dots review-pagination d-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fixtures;
