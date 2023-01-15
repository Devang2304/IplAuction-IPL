import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Dashboard.css'
import Card from './Card'
import Navbar from './Navbar'

import Powercard from './Powercard'
export default function OtherTeams() {
    const teamName = useParams().name.toLowerCase()
    const [teamLogo, setTeamLogo] = useState('csk.png')
    const [budget, setBudget] = useState('')
    const [powercards, setPowercards] = useState([])
    const [players, setPlayers] = useState([])
    
    useEffect(() => {
      let logo = `${teamName}.png` 
      
      const ps = [
        {'playerName':'Rohit Sharma',
      'playerImg':'Rohit Sharma.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"batsman"},
      {'playerName':'VIRAT KOHLI',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"batsman"},
      {'playerName':'Suryakumar Yadav',
      'playerImg':'Suryakumar Yadav.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"batsman"},
      {'playerName':'VIRAT KOHLI 4',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"batsman"},{'playerName':'VIRAT KOHLI 5',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"bowler"},{'playerName':'VIRAT KOHLI 6',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"bowler"},{'playerName':'VIRAT KOHLI 7',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"bowler"},{'playerName':'VIRAT KOHLI 8',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"bowler"},{'playerName':'VIRAT KOHLI 9',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"all rounder"},{'playerName':'VIRAT KOHLI 10',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"all rounder"},{'playerName':'VIRAT KOHLI 11',
      'playerImg':'Virat Kohli.png',
      'btnRequired':true,
      'flagImg':'india.png',
      'basePrice':10000000,
      'color':'blue',
      'batStat':{
        'ppl':9,
        'mo':10,
        'dth':9
      },
      'bowlStat':{
        'ppl':0,
        'mo':0,
        'dth':0
      },
      'type':"all rounder"},
    ]
    let b = 900000000
    let pcs = [{name:"juzzbuzz",isUsed:false},{name:"unoreverse",isUsed:false},{name:"focusfire",isUsed:false},{name:"nxt3",isUsed:false}]
    setTeamLogo(logo)
    setBudget(b)
    setPowercards(pcs)
    setPlayers(ps)
    
      //eslint-disable-next-line
    },[teamName])
    function convert(number) {
      const sign = Math.sign(Number(number));
      return Math.abs(Number(number)) >= 1.0e7
        ? sign * (Math.abs(Number(number)) / 1.0e7) + " Cr"
        : 
        Math.abs(Number(number)) >= 1.0e5
        ? sign * (Math.abs(Number(number)) / 1.0e5) + " Lakh"
        : 
        Math.abs(Number(number)) >= 1.0e3
        ? sign * (Math.abs(Number(number)) / 1.0e3) + " K"
        : Math.abs(Number(number));
    }
  
    return (
      <>
      <Navbar />
      <div className='dashboard'>
          <div className='team-container'>
            <div className='team-details'>
              <div className='team-logo'><img src={teamLogo?require(`../media/teamlogo/${teamLogo}`):require("../media/teamlogo/no.png")} alt=""/></div>
              <span className='budget'>Current budget:<br/> {convert(budget)} </span>
            </div>
            
            <div className='powercards'>
              <span>Powercards Available</span>
              <div className='powercard-container'>
                {
                  powercards.map((pc,i)=>{
                    return <Powercard name={pc.name}  key={i} isUsed={pc.isUsed} />
                  })
                }
              </div>
            </div>
          </div>
          <div className='team-player-container'>
                <p>Your Team Players:</p>
                <div className='player-container'>
                  <div className='batsman-container'>
                    <span className='player-type-heading'>Batsman:</span>
                    <div className="individual-player-type-container">
                    {
                      players.map((player,i)=>{
                        return player.type.toLowerCase() === "batsman"?
                        <Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={false} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                        : ''
                      })
                    }</div>
                  </div>
                  <div className='bowler-container'>
                    <span className='player-type-heading'>Bowler:</span>
                    <div className='individual-player-type-container'>
                    {
                      players.map((player,i)=>{
                        return player.type.toLowerCase() === "bowler"?
                           <Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={false} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                           : ''
                      })
                    }</div>
                  </div>
                  <div className='allrounder-container'>
                  <span className='player-type-heading'>All rounder:</span>
                  <div className="individual-player-type-container">
                  {
                    players.map((player,i)=>{
                      return player.type.toLowerCase() === "all rounder"?
                      <Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={false} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                          : ''
                    })
                    
                  }</div>
                  </div>
                </div>
          </div>  
      </div>
      </>
    )
}
