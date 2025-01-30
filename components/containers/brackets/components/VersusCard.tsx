import React, { forwardRef } from "react";
import "./VersusCard.css";

type VersusCardProps = {
  teamOne: string;
  teamTwo: string;
  teamOneImage: any;
  teamTwoImage: any;
  matchName: string;
};

const VersusCard = forwardRef<HTMLDivElement, VersusCardProps>(({
  teamOne,
  teamTwo,
  teamOneImage,
  teamTwoImage,
  matchName,
}, ref) => {
  return (
    <div className="versus-card" ref={ref}>
      <span className="match-name">{matchName}</span>
      <div className="team-container" style={{ backgroundImage: `url("${teamOneImage}")` }}>
        <div className="overlay"/>
        <span className="team-name">{teamOne}</span>
        <div className="score-boxes">
          <div className="score-box" style={{backgroundColor:'red' , color: 'white'}}>21</div>
          <div className="score-box" style={{backgroundColor:'green' , color: 'white'}}>21</div>
          <div className="score-box" style={{backgroundColor:'green' , color: 'white'}}>21</div>
        </div>
      </div>
      <div className="team-container" style={{ backgroundImage: `url("${teamTwoImage}")` }}>
        <div className="overlay" />
        <span className="team-name">{teamTwo}</span>
        <div className="score-boxes">
          <div className="score-box" style={{backgroundColor:'green' , color: 'white'}}>21</div>
          <div className="score-box" style={{backgroundColor:'red' , color: 'white'}}>21</div>
          <div className="score-box" style={{backgroundColor:'red' , color: 'white'}}>21</div>
        </div>
      </div>
    </div>
  );
});

export default VersusCard;
