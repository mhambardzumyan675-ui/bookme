import React, { useState } from 'react'
import './SearchBar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {
const[destination,setDestination]=useState("");
const[checkIn,setCheckIn]=useState("");
const[checkOut,setCheckOut]=useState("");


const [isGuestsOpen, setIsGuestsOpen] = useState(false);
const[guests,setGuests]=useState({
    adults:2,
    children:0,
});
const handleSearch=()=>{console.log({destination,checkIn,checkOut,guests,});};

  return (
    <>
    <section className='searchbar'>
    <div>
    <span className='search-icon'>⌕</span>
    <input className='search-dest' type='text' placeholder='Stavanger, Norway' value={destination} onChange={(e)=>setDestination(e.target.value)}/>
    </div>
    <div className='date-group'>
    <div className='date-in'>
    <input className='checkIn' type='date' value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} />
    <FontAwesomeIcon
    icon={faCalendarDays}
    className="calendar-icon"/>
    <span className='date-in-calendar'> Check in</span>
    </div>
    <div className='date-out'>
    <input className='checkOut' type='date' value={checkOut} onChange={(e)=>setCheckOut(e.target.value)}/>
    <span className='date-in-calendar'> Checkout</span>
    </div>
    </div>
    <div className='guests'>
        <FontAwesomeIcon icon={faUsers} className="guests-icon" />
        <button className='guests-btn' onClick={()=> setIsGuestsOpen(!isGuestsOpen)}>
            {guests.adults+guests.children} Guests
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon"  />
        </button>
    {isGuestsOpen &&(
        <div className='guests-dropdown'>
            <div className='adults'>
                <span>Adults</span>
                <button className='adults-remove-btn' onClick={()=>setGuests({...guests,adults:Math.max(1,guests.adults-1),})}>-</button>
                <span>{guests.adults}</span>
                
                <button className='adults-add-btn' onClick={()=>setGuests({...guests,adults:guests.adults+1})}>+</button>

            </div>

            <div className="children">
                <span>Children</span>
                <button className='children-remove-btn' onClick={()=>setGuests({...guests,children:Math.max(0,guests.children-1),})}>-</button>
                <span>{guests.children}</span>
                <button className='children-add-btn' onClick={()=>setGuests({...guests,children:guests.children+1})}>+</button>
            </div>
        </div>
    )}
    </div>
    <div className='checkout'>
    <button className='checkout-btn' onClick={handleSearch}><b>Checkout</b></button>
    </div>
    </section>
   
    </>
  )
}

export default SearchBar