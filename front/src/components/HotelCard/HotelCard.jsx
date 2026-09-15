import './HotelCard.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const HotelCard = ({images,name,rating,bed,square,price}) => {
 

  return ( 
    <>
    
    <div className='hotel-card'>
      <div className='card-img'>
        <img src={images} alt={name}></img>
        <div className='hotel-rating'>
          <FontAwesomeIcon icon={faStar} />
          <p className='rating-icon'>{rating}</p>
        </div>
        </div>
      <div className='hotel-names'>
        <h3 className='hotel-name'>{name}</h3>
      </div>
      <div className='hotel-info'>
        <p className='hotel-bed'>
          <FontAwesomeIcon  className='bed-icon' icon={faBed} />
          <span>{bed} bedrooms</span>
        </p>
        <p className='hotel-square'>
          <FontAwesomeIcon className='square-icon' icon={faRulerCombined} />
          <span>{square} m²</span>
        </p>
        <div className="prices-permonth">
        <p className='hotel-price'>${price} </p>
        <span className='price-span'>per month</span>
        </div>
      </div>
    </div>

    </>
  )
}

export default HotelCard