import React from 'react'
import '../styles/Leaderboard.css'
import { useState } from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
export default function Leaderboard() {
  const styles = [
    {
      'backgroundColor':'#FFD700'
    },
    {
      'backgroundColor':'#C0C0C0'
    },
    {
      'backgroundColor':'#574327'
    }
  ]
  const [Team,setTeam] = useState([]);
  useEffect(() => {
    let Name = 'CSK'
    let points = 1000
    let teams = [
      {
        'teamName':'CSK',
        'points':10000
      },
      {
        'teamName':'DC',
        'points':9000
      },
      {
        'teamName':'GT',
        'points':11000
      },
      {
        'teamName':'KKR',
        'points':5000
      },
      {
        'teamName':'LSG',
        'points':6000
      },
      {
        'teamName':'MI',
        'points':7000
      },
      {
        'teamName':'PBKS',
        'points':7500
      },
      {
        'teamName':'RCB',
        'points':9500
      },
      {
        'teamName':'RR',
        'points':8000
      },
      {
        'teamName':'SRH',
        'points':10500
      },
    ]
    teams.sort((a,b)=>b.points-a.points)
    setTeam(teams)
  },[])
  return (
    <>
    <Navbar/>
    <div className='leaderboard' >
      <div className='Leaderboard-span'>
          <span>Leaderboard</span>
      </div>
      <div className='leaderboard-body'>

        
         
          {
            
            Team.map((team,id)=>{
             return <div className='leaderboard-team-container' key={id} style={(id===0||id===1||id===2)?styles[id]:{}}> 
                  <WorkspacePremiumIcon style={{fontSize:40}} />
                <div  className='leaderboard-team-details'>
                <div>{team.teamName}</div>
                <div>{team.points}</div></div>
              </div>
            })
            
          }
      </div>
    </div>
    </>
  )
}
