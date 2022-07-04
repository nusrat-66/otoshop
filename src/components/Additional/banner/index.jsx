import React from 'react'
import BannerCar from "../../../assets/images/oto/Group.png"
 function Index() {
  return (
<div className="dv-wrapper">
    <div className="bannerWrapper">
     <div className='banner '>
        <div className="banner__content">
            <h1 className='banner__header'>Lorem ipsum dolor sitamet, consectetur</h1>
            <button className='banner__button'> Hissə-hissə al </button>
        </div>
        <div className="bannerImgWrapper">
         <img className='banner__img' src={BannerCar} alt="" />
        </div>
    </div>
    </div>
 </div>
  )
}

export default Index