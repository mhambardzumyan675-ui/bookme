import React from 'react'
import apartments from "../../data/apartments"
import './ApartmentsCard.scss'

const ApartmentsCard = ({name,image}) => {
  return (
    <>
    <div className='category-cards' >
        <h3 className='category-name'>{name}</h3>
        <img className='category-img' src={image}/>
    </div>
    </>
  )
}

export default ApartmentsCard