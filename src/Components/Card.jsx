import React from 'react'
import '../styles/Card.css';
import {useState} from 'react';
import ReactCardFlip from 'react-card-flip'
import CardFront from './CardFront';
import CardBack from './CardBack';
export default function Card ({playerName, playerImg, btnRequired, flagImg, basePrice,color,batStat,bowlStat,scale}) {
    const [isFlipped, setIsFlipped] = useState(false);
        const flip = () => {
        setIsFlipped(!isFlipped)
    }
    
  return (
    <ReactCardFlip containerClassName="card" isFlipped={isFlipped} flipDirection='horizontal' cardStyles={scale}>
            <CardFront playerName={playerName} playerImg={playerImg} flip={flip} btnRequired={btnRequired} flagImg={flagImg} basePrice = {basePrice} color = {color} />
            <CardBack flip= {flip}batStat = {batStat} bowlStat={bowlStat} color = {color} btnRequired={btnRequired}  />
    </ReactCardFlip>
    
  )
}
