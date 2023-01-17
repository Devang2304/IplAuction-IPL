import React,{useState} from 'react'
import '../styles/Card.css'
import FlightIcon from '@mui/icons-material/Flight';
export default function CardFront({playerName, playerImg, btnRequired, flagImg, basePrice,color1,color2,flip , scale,type,overall}) {
    const b = {
        'borderRadius': "30px 30px 0px 0px"
    }
    const gradient = {
        'background':`linear-gradient(to bottom right  , ${color1},${color2} )`,
    };
    const imageOnError = (event) => {
        event.target.src = "/media/player/no.png"
      };
    
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
    
        <div className='cardFront' style={{...{...gradient,...scale},...(btnRequired?b:{})}} onClick = {flip} >
        <div className='player-name'>{playerName.toUpperCase()}</div>
        <div className='player-img'><img src={`/media/player/${playerImg}`} onError={imageOnError}  alt="" /><span className='player-front-stats'><div>BOW</div><div>97</div><div className='flag'><img src={`/media/flag/${flagImg}`}  alt="" /></div></span></div>
            
                
                <div className='card-footer' style={{...(btnRequired?{'borderRadius':'0px'}:{})}}>
                    
                    <div className='price'>Price: {convert(basePrice)} {flagImg!=="india.png"?<FlightIcon/>:""}</div>
                </div>      
                
    </div>
  )
}
