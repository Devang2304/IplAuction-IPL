import React from 'react'
import '../styles/Card.css'
export default function CardFront({playerName, playerImg, btnRequired, flagImg, basePrice,color,flip , scale}) {
    const handleError = (e) => e.target.src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png";
    const b = {
        'borderRadius': "30px 30px 0px 0px"
    }
    const gradient = {
        'background':`linear-gradient(to bottom  , ${color} ,white)`,
        'transform':scale
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
        <div className='player-img'><img src={require(`../media/player/${playerImg}`)} onError={handleError} alt="" /></div>
            
                
                <div className='card-footer' style={{...(btnRequired?{'borderRadius':'0px'}:{})}}>
                    <div className='flag'><img src={require(`../media/flag/${flagImg}`)} onError={handleError} alt="" /></div>
                    <div className='price'>Base P: {convert(basePrice)}</div>
                </div>      
                
    </div>
  )
}
