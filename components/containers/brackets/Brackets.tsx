'use client'

import Image from "next/image";
import bgimg from '@/public/images/RTFLines2.png'

// const teamArray = [
//   {
//     teamName: 'CODE RED',
//     img: '/images/teams/profile/Code Red Profile.jpg'
//   },
//   {
//     teamName: 'SMASHERS',
//     img: '/images/teams/profile/Smashers Profile.jpg'
//   },
//   {
//     teamName: 'TITANS',
//     img: '/images/teams/profile/Titans profile.png'
//   },
//   {
//     teamName: 'VENPURA',
//     img: '/images/teams/profile/Venpura Profile.jpg'
//   },
//   {
//     teamName: 'DARK ROGERS',
//     img: '/images/teams/profile/Dark Rogers Profile.jpg'
//   },
//   {
//     teamName: 'TEAM BADDIES',
//     img: '/images/teams/profile/Team Baddies Profile.jpg'
//   },
// ]

const Brackets = () => {
  return (
    <section className="mt-4 pb-0">
      <div className="container" id="bracket-container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              {/* <span className="sub-title">Coming Soon</span> */}
              <h2 className="title title-animation">
                Playoffs
              </h2>
              <p>
                Shuttle Royale Playoffs Bracket – The official tournament bracket for the intense battles leading to the championship.
              </p>
            </div>
          </div>

          <div className="">
            <Image alt='Bg' src={bgimg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brackets;
