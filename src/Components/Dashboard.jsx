import React,{useState,useEffect} from 'react'
import '../styles/Dashboard.css'
import Card from './Card'
import Navbar from './Navbar'

import Powercard from './Powercard'
export default function Dashboard() {
  const [teamLogo, setTeamLogo] = useState('csk.png')
  const [budget, setBudget] = useState("")
  const [powercards, setPowercards] = useState([])
  const [players, setPlayers] = useState([])
  useEffect(() => {
    let logo = "rcb.png" 
    
    const ps = [
      {'playerName':'Virat Kohli',
    'playerImg':'Virat Kohli.png',
    'btnRequired':true,
    'flagImg':'india.png',
    'basePrice':10000000,
    'color1':'#1A00FF',
    'color2':'#8196F9',
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
    {'playerName':'Devon Conway',
    'playerImg':'Devon Conway.png',
    'btnRequired':true,
    'flagImg':'nz.png',
    'basePrice':10000000,
    'color1':'black',
    'color2':'gray',
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
    {'playerName':'Alex Hales',
    'playerImg':'Alex Hales.png',
    'btnRequired':true,
    'flagImg':'england.png',
    'basePrice':10000000,
    'color1':'orange',
    'color2':'red',
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
    {'playerName':'Faf du Plessis',
    'playerImg':'Faf du Plessis.png',
    'btnRequired':true,
    'flagImg':'sa.png',
    'basePrice':10000000,
    'color1':'green',
    'color2':'yellow',
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
    'type':"batsman"},{'playerName':'Josh Hazlewood',
    'playerImg':'Josh Hazlewood.png',
    'btnRequired':true,
    'flagImg':'australia.png',
    'basePrice':10000000,
    'color1':'yellow',
    'color2':'black',
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
    'type':"bowler"},{'playerName':'Mustafizur Rahman',
    'playerImg':'Mustafizur Rahman.png',
    'btnRequired':true,
    'flagImg':'bangladesh.png',
    'basePrice':10000000,
    'color1':'green',
    'color2':'red',
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
    'type':"bowler"},{'playerName':'Fazalhaq Farooqi',
    'playerImg':'Fazalhaq Farooqi.png',
    'btnRequired':true,
    'flagImg':'afghanistan.png',
    'basePrice':10000000,
    'color1':'red',
    'color2':'black',
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
    'type':"bowler"},{'playerName':'Joshua Little',
    'playerImg':'Joshua Little.png',
    'btnRequired':true,
    'flagImg':'ireland.png',
    'basePrice':10000000,
    'color1':'lightgreen',
    'color2':'black',
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
    'type':"bowler"},{'playerName':'Sikander Raza',
    'playerImg':'Sikander Raza.png',
    'btnRequired':true,
    'flagImg':'zimbabwe.png',
    'basePrice':10000000,
    'color1':'yellow',
    'color2':'red',
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
    'type':"all rounder"},{'playerName':'Roelof van der Merwe',
    'playerImg':'Roelof van der Merwe.png',
    'btnRequired':true,
    'flagImg':'netherlands.png',
    'basePrice':10000000,
    'color1':'blue',
    'color2':'orangered',
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
    'type':"all rounder"},{'playerName':'Hayley Matthews',
    'playerImg':'Hayley Matthews.png',
    'btnRequired':true,
    'flagImg':'wi.png',
    'basePrice':10000000,
    'color1':'maroon',
    'color2':'crimson',
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
  let pcs = [{name:"juzzbuzz",isUsed:false},{name:"unoreverse",isUsed:true},{name:"focusfire",isUsed:true},{name:"nxt3",isUsed:false}]
  setTeamLogo(logo)
  setBudget(b)
  setPowercards(pcs)
  setPlayers(ps)
  
    //eslint-disable-next-line
  },[])
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
    <Navbar/>
    <div className='dashboard'>
        <div className='team-container'>
          <div className='team-details'>
            <div className='team-logo'><img src={`media/teamlogo/${teamLogo}`} alt="" /></div>
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
                      <Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={false} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color1={player?.color1?player.color1:'#1A00FF'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  color2={player?.color2?player.color2:'#1A00FF'} />
                      : ""
                    })
                  }</div>
                </div>
                <div className='bowler-container'>
                  <span className='player-type-heading'>Bowler:</span>
                  <div className='individual-player-type-container'>
                  {
                    players.map((player,i)=>{
                      return player.type.toLowerCase() === "bowler"?
                         <Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={false} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color1={player?.color1?player.color1:'#1A00FF'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}} color2={player?.color2?player.color2:'#1A00FF'} />
                         : ""
                    })
                  }</div>
                </div>
                <div className='allrounder-container'>
                <span className='player-type-heading'>All rounder:</span>
                <div className="individual-player-type-container">
                {
                  players.map((player,i)=>{
                    return player.type.toLowerCase() === "all rounder"?
                    <Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={false} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color1={player?.color1?player.color1:'#1A00FF'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}} color2={player?.color2?player.color2:'#1A00FF'}  />
                        : ""
                  })
                  
                }</div>
                </div>
              </div>
        </div>  
    </div>
    </>
  )
}
