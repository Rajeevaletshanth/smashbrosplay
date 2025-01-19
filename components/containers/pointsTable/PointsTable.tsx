import React from 'react';
import './PointTable.css'; // Import the CSS file


import Image from 'next/image';
import codeRed from "@/public/images/teams/logo/Code Red.png";
import darkRogers from "@/public/images/teams/logo/Dark Rogers.png";
import teamBaddies from "@/public/images/teams/logo/Team Baddies.png";
import titans from "@/public/images/teams/logo/Titans.png";


const teams: any[] = [
    { name: 'Code Red', logo: codeRed, played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Dark Rogers', logo: darkRogers, played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Smashers', played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Team Baddies', logo: teamBaddies, played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Titans', logo: titans, played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
    { name: 'Team 6', played: 0, won: 0, lost: 0, tied: 0, points: 0, nrr: 0 },
];

const PointTable: React.FC = () => {
    return (
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
                            <th className='text-black'>MP</th>
                            <th className='text-black'>Pts</th>
                            <th className='text-black'>W/MP Ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team, index) => (
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
                                {team.name}</td>
                                <td>{team.played}</td>
                                <td>{team.won}</td>
                                <td>{team.lost}</td>
                                <td>{team.tied}</td>
                                <td>{team.points}</td>
                                <td>{team.nrr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PointTable;
