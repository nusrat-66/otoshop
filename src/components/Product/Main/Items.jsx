import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteWishListStorage,addWishListStorage  } from '../../../redux/actions'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HeartIcon from '../../../assets/images/heart.svg';
import redHeart from "../../../assets/images/redHeart.svg"
 import wheel from "../../../assets/images/oto/wheel.png"

 
const percentMaker=(object)=>{
     const percentObject=object.creditSettingMonth.find((credit)=>{
        if(credit.month==12){
            return credit.percent
        }
    })
    const price=object.price
    const percent=percentObject?.percent
 return price+((price*percent)/100)
 }
export function Items({ currentItems }) {
    const wishList=useSelector((state)=>state.wishList)
    const dispatch=useDispatch()
    const wishListAdd=(id)=>{
        dispatch(addWishListStorage(id))
      }
       const wishListDelete=(id)=>{
           dispatch(deleteWishListStorage(id))
        }
     return (
      <>
  {
                            currentItems && currentItems.map((index, key) => {  return  <div className="product-img" >
                            <Link to={`/mehsul/st12121`} className="product-dv-img w-inline-block">
                               <div className="prd-dv">
                                   <img
                                       src={wheel}
                                       loading="lazy"
                                       alt=""
                                       className="product-image-h"
                                        />
                               </div>
                           </Link>
                           <div className="product-heading product-heading_oto" >
                               <h6 className="prd-title prd-title_oto">product Name</h6>
                               <div className="total-price total-price_oto">{500} ₼</div>
                           </div>
                           <p className='product__sizeText'> Ölçü: 265-65-17</p>
                           <div className="prd-prc">
                               <div className="month">
                                   <div className="prd-month">12 ay</div>
                                   <div className="prd-price">120 ₼ / ay</div>
                               </div>
                           </div>
                       </div>}
                             ) 
                        }
      </>
    );
  } 
 
export default Items