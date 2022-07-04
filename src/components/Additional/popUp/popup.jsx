import React, {useState} from 'react'

function Popup() {
    const [pop, setPop] = useState(false)
    const closeFunction=()=>setPop(false)
  return (
      <>
   {pop && <div className='popupWrapper'>
  <div className='popup'>
    <div className='popup__btnDiv' >
      <p className='popup__text'>Sizin avtomobilinizə uyğun ölçülər:</p>
      <button onClick={closeFunction} className='popup__Xbutton'>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0C5.83192 0 0 5.83192 0 13C0 20.1681 5.83192 26 13 26C20.1681 26 26 20.1681 26 13C26 5.83192 20.1681 0 13 0ZM18.2579 16.726C18.4695 16.9375 18.4695 17.2805 18.2579 17.4921L17.4921 18.2579C17.2805 18.4694 16.9376 18.4694 16.726 18.2579L13 14.5319L9.27398 18.2579C9.06237 18.4694 8.7195 18.4694 8.50789 18.2579L7.74206 17.4921C7.53045 17.2806 7.53045 16.9376 7.74206 16.726L11.4681 12.9999L7.74206 9.27393C7.53045 9.06242 7.53045 8.71945 7.74206 8.50789L8.50789 7.74201C8.7195 7.5305 9.06237 7.5305 9.27398 7.74201L13 11.468L16.726 7.74201C16.9376 7.5305 17.2805 7.5305 17.4921 7.74201L18.2579 8.50789C18.4695 8.71939 18.4695 9.06237 18.2579 9.27393L14.5319 12.9999L18.2579 16.726Z" fill="#1C2258" />
        </svg>
      </button>
    </div>


    <div className="popup__buttons">
        <button className="popup__button">
            432/M13
        </button>
        <button className="popup__button">
            432/M13
        </button>
        <button className="popup__button">
            432/M13
        </button>
        <button className="popup__button">
            432/M13
        </button>
        <button className="popup__button">
            432/M13
        </button>
        
    </div>
  </div>
</div>
    }
      </>
  )
}

export default Popup