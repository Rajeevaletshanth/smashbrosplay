'use client'
import React, { useEffect, useState } from 'react';


import Image from 'next/image';
import codeRed from "@/public/images/teams/logo/Code Red.png";
import darkRogers from "@/public/images/teams/logo/Dark Rogers.png";
import teamBaddies from "@/public/images/teams/logo/Team Baddies.png";
import titans from "@/public/images/teams/logo/Titans.png";
import venpura from "@/public/images/teams/logo/Venpura.png";
import axios from 'axios';
import GroupSorter from '../groupSorter/GroupSorter';


const CoinFlipper: React.FC = () => {

    return (
        <section className="pb-0 section">
            <div className="container">
            <div className="section__content">
            <h2 className="title title-animation">
                Group Sorter
              </h2>
              <p style={{marginBottom:30}}>
              Let fate decide your group.
                            </p>
            <iframe
      src="https://flipsimu.com/emb/coin?id=pVdPU"
      width="50%"
      height="430px"
      scrolling="no"
      frameBorder="0"
      // title="Coin Flip Simulation"
    />        
    </div>
    <GroupSorter />
            </div>
        </section>
    );
};

export default CoinFlipper;
