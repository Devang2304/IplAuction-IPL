import React,{useState} from 'react'
import '../styles/Search.css'
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card';
import Navbar from './Navbar';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeOfPlayer, setTypeOfPlayer] = useState("")
  const ps = [
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
  'type':"Batsman"},
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
  'type':"Batsman"},
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
  'type':"Batsman"},
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
  'type':"Batsman"},{'playerName':'VIRAT KOHLI',
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
  'type':"Batsman"},{'playerName':'VIRAT KOHLI',
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
  'type':"Batsman"},{'playerName':'VIRAT KOHLI',
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
  'type':"Batsman"},{'playerName':'VIRAT KOHLI',
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
  'type':"Batsman"},{'playerName':'VIRAT KOHLI',
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
  'type':"Batsman"},{'playerName':'VIRAT KOHLI',
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
  'type':"Batsman"},{'playerName':'VIRAT KOHLI',
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
  'type':"Batsman"},
]
  const submit = (e) =>{
    
  }

  return (
    <>
    <Navbar />
    <div className='search'>
      <div className='searchBar'>
        <form onSubmit={submit}>
          <div>          <label htmlFor="query"><SearchIcon/></label>
          <input type="text" name='query' value={searchQuery} placeholder="Search" onChange={ (e)=>{setSearchQuery(e.target.value)}} autoComplete="off"/></div>
          <select className='menu-item' name="type">
            <option className='menu-item' value="Batsman">Batsman</option>
            <option className='menu-item' value="Bowler">Bowler</option>
            <option className='menu-item' value="All Rounder">All Rounder</option>
            <option className='menu-item' value="Women Player">Women Player</option>
            <option className='menu-item' value="Associate Player">Associate Player</option>
          </select>
          <button><SearchIcon/></button>
        </form>
      </div>
      <div className="searchResults">
        {
          ps.map((player,i)=>{
            return <Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={false} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color={player?.color?player.color:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}}  />
          })
        }
      </div>
    </div>
    </>
  )
}
