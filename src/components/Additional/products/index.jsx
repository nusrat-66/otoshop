import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import wheel from "../../../assets/images/oto/wheel.png"

function Index() {
      const pert=(data)=> data;

const [type, setType] = useState("newComers");


  return (
      <div className="dv-wrapper">
      <div className='produktlar'>
    <div className="produktlar__buttons">
        <button onClick={()=>setType("newComers")} className={type==="newComers"?'produktlar__button produktlar__button_active':'produktlar__button'}>
        Yeni gələnlər
        </button>
        <button onClick={()=>setType("auropean")} className={type==="auropean"?'produktlar__button produktlar__button_active':'produktlar__button'}>
        Avropa maşınları
        </button>
        <button onClick={()=>setType("korean")} className={type==="korean"?'produktlar__button produktlar__button_active':'produktlar__button'}>
        Koreya
        </button>
    </div>

    <div className='w-layout-grid prd-grid campaign-cs-last'>


                              <div className="product-img" >
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
                                <div className="product-heading product-heading_oto" onClick={pert(520)}>
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
                            </div>
 
                              <div className="product-img" >
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
                                <div className="product-heading product-heading_oto" onClick={pert(520)}>
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
                            </div>
 
                              <div className="product-img" >
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
                                <div className="product-heading product-heading_oto" onClick={pert(520)}>
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
                            </div>
 

                              <div className="product-img" >
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
                                <div className="product-heading product-heading_oto" onClick={pert(520)}>
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
                            </div>
              </div>
    </div>
    </div>

  )
}

export default Index