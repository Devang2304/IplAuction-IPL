import {React,useState} from 'react'
import '../styles/Search.css'
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card';
import Navbar from './Navbar';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeOfPlayer, setTypeOfPlayer] = useState("")
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
  'type':"all rounder"},{'playerName':'Roelof Merwe',
  'playerImg':'Roelof Merwe.png',
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
            return <Card key={i} playerName={player?.playerName?player.playerName:""} playerImg ={player?.playerImg?player.playerImg:"no.png"} btnRequired={false} flagImg = {player?.flagImg?player.flagImg:"no.png"} basePrice = {player?.basePrice?player.basePrice:0} color1={player?.color1?player.color1:'blue'} scale={{'transform':'scale(0.5)'}} batStat={player?.batStat?player.batStat:{'ppl':0,'mo':0,'dth':0}} bowlStat={player?.bowlStat?player.bowlStat:{'ppl':0,'mo':0,'dth':0}} color2={player?.color2?player.color2:'blue'}  />
          })
        }
      </div>
    </div>
    </>
  )
}
