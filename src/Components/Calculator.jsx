import React,{useState,useEffect} from 'react'
import '../styles/Calculator.css'
import Card from './Card'
import FunctionsIcon from '@mui/icons-material/Functions';
import Navbar from './Navbar';
export default function Calculator() {
  const [isBat, setIsBat] = useState(true)
  const [score, setScore] = useState(0)
  const [teamPlayers, setTeamPlayers] = useState([])
  const [batPPL, setBatPPL] = useState([])
  const [batMO, setBatMO] = useState([])
  const [batDTH, setBatDTH] = useState([])
  const [bowlPPL, setBowlPPL] = useState([])
  const [bowlMO, setBowlMO] = useState([])
  const [bowlDTH, setBowlDTH] = useState([])
  const calculate = () => {
    let sc=0;
    
      batPPL.forEach((player)=>{
        sc+=player.batStat.ppl
      })
      batMO.forEach((player)=>{
        sc+=player.batStat.mo
      })
      batDTH.forEach((player)=>{
        sc+=player.batStat.dth
      })
      bowlPPL.forEach((player)=>{
        sc+=player.bowlStat.ppl
      })
      bowlMO.forEach((player)=>{
        sc+=player.bowlStat.mo
      })
      bowlDTH.forEach((player)=>{
        sc+=player.bowlStat.dth
      })
      
    setScore(sc)
  }

  const remove = (player,type) =>{

    if (isBat) {
      if (type==='ppl') {
        const index = batPPL.findIndex((p)=>p.playerName===player.playerName)
        batPPL.splice(index,1);
      }else if(type==='mo'){
        const index = batMO.findIndex((p)=>p.playerName===player.playerName)
        batMO.splice(index,1);
      }
      else{
        const index = batDTH.findIndex((p)=>p.playerName===player.playerName)
        batDTH.splice(index,1);
      }
    }
    else{
      if (type==='ppl') {
        const index = bowlPPL.findIndex((p)=>p.playerName===player.playerName)
        bowlPPL.splice(index,1);
      }else if(type==='mo'){
        const index = bowlMO.findIndex((p)=>p.playerName===player.playerName)
        bowlMO.splice(index,1);
      }
      else{
        const index = bowlDTH.findIndex((p)=>p.playerName===player.playerName)
        bowlDTH.splice(index,1);
      }
    }
    const arr = [player,...teamPlayers].filter((value,index,self)=>{
      return self.indexOf(value) === index;
    })
    setTeamPlayers(arr)
  }
  const set = (player,type) => {
    let arr = [];
    if(isBat){
    if (type==='ppl') {
       arr = [...batPPL,player].filter((value,index,self)=>{
        return self.indexOf(value) === index;
      })
      setBatPPL(arr)
    }
    else if(type === 'mo'){
      const arr = [...batMO,player].filter((value,index,self)=>{
        return self.indexOf(value) === index;
      })    
      setBatMO(arr)
    }
    else{
      const arr = [...batDTH,player].filter((value,index,self)=>{
        return self.indexOf(value) === index;
      })
      setBatDTH(arr)
    }
  }
  else{
    if (type==='ppl') {
      arr = [...bowlPPL,player].filter((value,index,self)=>{
       return self.indexOf(value) === index;
     })
     setBowlPPL(arr)
   }
   else if(type === 'mo'){
     const arr = [...bowlMO,player].filter((value,index,self)=>{
       return self.indexOf(value) === index;
     })    
     setBowlMO(arr)
   }
   else{
     const arr = [...bowlDTH,player].filter((value,index,self)=>{
       return self.indexOf(value) === index;
     })
     setBowlDTH(arr)
   }

  }
    const index = teamPlayers.findIndex((p)=>p.playerName===player.playerName)
    teamPlayers.splice(index,1);
  }
  const submit = ()=>{
    alert("SUBMITTED")
  }
  const leftScroll = () => {
    const left = document.getElementById('scrollable-div')
    left.scrollBy(-400,0)
  }
  const rightScroll = () => {
    const right = document.getElementById('scrollable-div')
    right.scrollBy(400,0)
  }
  useEffect(() => {
    const ps = [
      {'playerName':'VIRAT KOHLI 1',
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
    {'playerName':'VIRAT KOHLI 2',
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
    {'playerName':'VIRAT KOHLI 3',
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
  setTeamPlayers(ps)
  }, [])
  
  return (
    <>
    <Navbar/>
    <div className='calculator'>
        <div className='calculator-container'>
          <div className='calculate'>
            <span>Total Points:</span>
            <div className="points-container"><FunctionsIcon style={{'transform':'scale(1.8)'}} />{score}</div>
            <button onClick={calculate}>Calculate</button>
            <button onClick={submit}>Submit</button>
          </div>
          <div className="player-type-buttons">
            <button onClick={()=>{setIsBat(true)}}><img src={require('../media/bat.png')} alt="" /></button>
            <button onClick={()=>{setIsBat(false)}}><img src={require('../media/ball.png')} alt="" /></button>
          </div>
        </div>
        <div className='calculator-player-container'>
          {
            isBat?
            <>
            <p className='cpcp'>Batsman</p>
              <div className='calculator-type-player-container'>
                <p>PPL:</p>
                {
                  batPPL.map((player,i)=>{
                    return <div className='modifiedCard'><Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={true} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                    <button className='remove-button' onClick={()=>{remove(player,'ppl')}}>Remove</button>
                    </div>
                  })
                }
              </div>
              <div className='calculator-type-player-container'>
                <p>MO:</p>
                {
                  batMO.map((player,i)=>{
                    return<div className='modifiedCard'><Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={true} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}} />
                    <button className='remove-button' onClick={()=>{remove(player,'mo')}}>Remove</button>
                    </div>
                  })
                }
              </div>
              <div className='calculator-type-player-container'>
                <p>DTH:</p>
                {
                  batDTH.map((player,i)=>{
                    return <div className='modifiedCard'><Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={true} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                    <button className='remove-button' onClick={()=>{remove(player,'dth')}}>Remove</button>
                    </div>
                  })
                }
                </div>
            </>
            :
            <>
              <p className='cpcp'>Bowler</p>
              <div className='calculator-type-player-container'>
                <p>PPL:</p>
                {
                  bowlPPL.map((player,i)=>{
                    return <div className='modifiedCard'><Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={true} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                    <button className='remove-button' onClick={()=>{remove(player,'ppl')}}>Remove</button>
                    </div>
                  })
                }
                </div>
              <div className='calculator-type-player-container'>
                <p>MO:</p>
                {
                  bowlMO.map((player,i)=>{
                    return<div className='modifiedCard'><Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={true} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}} />
                    <button className='remove-button' onClick={()=>{remove(player,'mo')}}>Remove</button>
                    </div>
                  })
                }
                </div>
              <div className='calculator-type-player-container'>
                <p>DTH:</p>
                {
                  bowlDTH.map((player,i)=>{
                    return <div className='modifiedCard'><Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={true} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                    <button className='remove-button' onClick={()=>{remove(player,'dth')}}>Remove</button>
                    </div>
                  })
                }
                </div>
            </>
          }
          <div className="calculator-team-players-container">
              <div className='scroll-buttons-container'><p>Team Players:</p><div className='scroll-buttons'><button onClick={leftScroll}>{"<"}</button><button onClick={rightScroll}>{">"}</button></div></div>
              <div className="calculator-individual-team-player-container" id="scrollable-div">
                {
                  teamPlayers.map((player,i)=>{
                   return isBat?(player.type.toLowerCase()==="batsman"||player.type.toLowerCase()==="all rounder"?<div className='modifiedCard'><Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={true} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                    <div className='calculator-card-buttons-container'>
                      <button className='calculator-card-buttons' onClick={()=>{set(player,'ppl')}} style={{borderRadius:'0px 0px 0px 20px'}}>PPL</button>
                      <button className='calculator-card-buttons' onClick={()=>{set(player,'mo')}}>MO</button>
                      <button className='calculator-card-buttons' onClick={()=>{set(player,'dth')}} style={{borderRadius:'0px 0px 20px 0px'}}>DTH</button>
                      </div>
                   </div>:''):(player.type.toLowerCase()==="bowler"||player.type.toLowerCase()==="all rounder"?<div className='modifiedCard'><Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={true} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
                    <div className='calculator-card-buttons-container'>
                      <button className='calculator-card-buttons' onClick={()=>{set(player,'ppl')}} style={{borderRadius:'0px 0px 0px 20px'}}>PPL</button>
                      <button className='calculator-card-buttons' onClick={()=>{set(player,'mo')}}>MO</button>
                      <button className='calculator-card-buttons' onClick={()=>{set(player,'dth')}} style={{borderRadius:'0px 0px 20px 0px'}}>DTH</button>
                      </div>
                   </div>:'')
                  })
                }
              </div>
          </div>
        </div>
    </div>
    </>
  )
}
