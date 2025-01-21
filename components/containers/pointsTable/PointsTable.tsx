'use client'
import React, { useEffect, useState } from 'react';
import './PointTable.css'; // Import the CSS file


import Image from 'next/image';
import codeRed from "@/public/images/teams/logo/Code Red.png";
import darkRogers from "@/public/images/teams/logo/Dark Rogers.png";
import teamBaddies from "@/public/images/teams/logo/Team Baddies.png";
import titans from "@/public/images/teams/logo/Titans.png";
import axios from 'axios';


const teams: any[] = [
    { name: 'Code Red', logo: codeRed, played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Dark Rogers', logo: darkRogers, played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Smashers', played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Team Baddies', logo: teamBaddies, played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Titans', logo: titans, played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Team 6', played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
];

const PointTable: React.FC = () => {
    const [data, setData] = useState<any>([])
    const fetchPoints = async() => {
        try {
            const response:any = await axios.get('http://51.21.108.179:5001/sbplay/getAll')
            if(response.data.response === 'success'){
                let tempData :any = response.data.data;
                let datat:any = []
                tempData.map((item:any) => {
                    datat.push({
                        team: item.team_name,
                        played: item.played,
                        won: item.wins, 
                        lost: item.losts,
                        matchesWin: item.games_win,
                        matchesPlayed: item.matches_played, 
                        points: item.points, 
                        winMatchRatio: (item.matches_played === 0 || item.games_win === 0) ? 0 : item.games_win/item.matches_played
                    })
                })
                datat.sort((a: any, b: any) => {
                    if (b.points !== a.points) {
                      return b.points - a.points;
                    }
                    return b.winMatchRatio - a.winMatchRatio;
                  });
            
                  datat = datat.map((item: any, index: number) => ({
                    ...item,
                    rank: index + 1,
                  }));
                setData(datat)
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchPoints()
    },[])
    return (
        <section className="mt-4 pb-0 craft">
      <div className="container">
        <div className="table-container">
            <h2 className="table-header" style={{ color: 'rgb(0, 255, 89)' }}>POINTS TABLE</h2>
            <div className="table-standings">
                {/* <h3 className="table-header">STANDINGS</h3> */}
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-black' style={{ textAlign: 'left' }}>Teams</th>
                            <th className='text-black'>P</th>
                            <th className='text-black'>W</th>
                            <th className='text-black'>L</th>
                            <th className='text-black'>MW</th>
                            <th className='text-black'>MP</th>
                            <th className='text-black'>Pts</th>
                            <th className='text-black'>MW/MP Ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((team:any, index:number) => (
                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td style={{ textAlign: 'left' }}>
                                    {/* <Image
                                    src={team.logo}
                                    alt="Team Banner"
                                    priority
                                    className='mr-4'
                                    width={30}
                                /> */}
                                {team.team}</td>
                                <td>{team.played}</td>
                                <td>{team.won}</td>
                                <td>{team.lost}</td>
                                <td>{team.matchesWin}</td>
                                <td>{team.matchesPlayed}</td>
                                <td>{team.points}</td>
                                <td>{(team.winMatchRatio).toFixed(3)}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </section>
    );
};

export default PointTable;
