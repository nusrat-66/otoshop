import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddIcon from '../../assets/images/add.svg';
import HeartIcon from '../../assets/images/heart.svg';
import redHeart from "../../assets/images/redHeart.svg"
import LeftIcon from '../../assets/images/arrow-left.svg';
import RightIcon from '../../assets/images/arrow-right.svg';
import ArrowIcon from '../../assets/images/bc-arrow.svg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addWishListStorage, deleteWishListStorage } from "../../redux/actions"
  
export default function ProductComp() { 

const params=useParams()
 useEffect(() => {
    window.scrollTo(0, 0)
 }, [params])

    const dispatch=useDispatch()
    
    const wishListAdd=(id)=>{
      dispatch(addWishListStorage(id))
    }

    const wishListDelete=(id)=>{
         dispatch(deleteWishListStorage(id))
      }
    const wishList=useSelector((state)=>state.wishList)
 


    const [ Products, setProducts ] = useState(false);
    function getProducts() {

        const width=params.search.split("-")[0]
        const height=params.search.split("-")[1]
        const diameter=params.search.split("-")[2]
        const type=params.search.split("-")[3]
        const season=params.search.split("-")[4]

        axios({
            method: "POST",
            baseURL: "https://apis.digimall.az/api/Queries/OtoShopAdvanceSearch",
            headers: {
                'api-key': 'D74AE0D0-6F20-40AA-B4C9-FC138D66EF10' 
            },
            data: 
                {
                    "width" : parseInt(width),
                    "height": parseInt(height),
                    "diameter": parseInt(diameter),
                    "type": type,
                    "season": season,
                    "skip": 0,
                    "take": 1000,
                    "languageId": 15,
                }
         }).then( function(response) {
             setProducts(response.data);
         })
    }
    useEffect(() => {
        if(params.search)
        getProducts()
    }, [params])
    return(
        <div className="prdct-page-title wf-section">
            <div className="dv-wrapper">
                 <div className="filter-sec-dv">
                    <div className="breadcrumbs">
                        <Link to="/" className="text-link">Ana Səhİfə</Link>
                        <img src={ArrowIcon} loading="lazy" alt="" className="arrow-icon" />
                        <Link to="/mehsul" className="text-link">Kateqorİyalar</Link>
                        <img src={ArrowIcon} loading="lazy" alt="" className="arrow-icon" />
                        <Link to="/mehsul" className="text-link active">Yataq dəsti</Link>
                    </div>
                    <div className="filter">
                        <div data-hover="true" data-delay="{200}" className="a-z-filter w-dropdown">
                            {/* <div className="dp-down-toggle w-dropdown-toggle">
                                <div className="toggle-text">Yenilər əvvəlcə</div>
                                <img src="images/icon-down.svg" loading="lazy" alt="" className="image-5" />
                            </div> */}
                            <nav className="dp-list-a-z w-dropdown-list">
                                <Link to="/" className="w-dropdown-link">Link 1</Link>
                                <Link to="/" className="w-dropdown-link">Link 2</Link>
                                <Link to="/" className="w-dropdown-link">Link 3</Link>
                            </nav>
                        </div>
                        <div className="in-sale-block w-form">
                            {/* <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="sale-form">
                                <label className="w-checkbox sale-checkbox">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                                    <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" style={{opacity: 0, position: 'absolute', zIndex: -1}} />
                                    <span className="checkbox-label w-form-label" htmlFor="checkbox">Endirimdə olan</span>
                                </label>
                            </form> */}
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-layout-grid sidebar-layout-grid">


                    
                 <div id="w-node-ba7b83b4-baa9-009f-e5d0-16296e3e3744-fc9d8ccc" className="left-side">
                        <div className="left-slide-h">
                            <h6 id="w-node-b9c07c25-5c4f-130a-7aac-d8bbd182763a-fc9d8ccc" className="lefts-side-h">Kateqorİyalar</h6>
                            <a className="filter-product w-inline-block"><img src="images/filter-search.svg" loading="lazy" alt="" /></a>
                        </div>
                        <div className="filter-module">
                            <div className="fltr-area">
                                <ul className="fltr-list">
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div className="fltr-item-h">masa &amp; stullar</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Çarpayı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Paltar Dolabı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Komod &amp; Güzgü</a>
                                            </nav>
                                        </div>
                                    </li>
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>Qonaq</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Çarpayı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Paltar Dolabı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Komod &amp; Güzgü</a>
                                            </nav>
                                        </div>
                                    </li>
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>Yumşaq</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Çarpayı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Paltar Dolabı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Komod &amp; Güzgü</a>
                                            </nav>
                                        </div>
                                    </li>
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>uşaq &amp; gənc</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Çarpayı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Paltar Dolabı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Komod &amp; Güzgü</a>
                                            </nav>
                                        </div>
                                    </li>
 
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>dəhlİz</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Çarpayı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Paltar Dolabı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Komod &amp; Güzgü</a>
                                            </nav>
                                        </div>
                                    </li>
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>masa &amp; stullar</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Çarpayı</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Paltar Dolabı</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Komod &amp; Güzgü</a>
                                            </nav>
                                        </div>
                                    </li>
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>Döşəklər</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Çarpayı</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Paltar Dolabı</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Komod &amp; Güzgü</a>
                                            </nav>
                                        </div>
                                    </li>
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>Mətbəx</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Çarpayı</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Paltar Dolabı</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Komod &amp; Güzgü</a>
                                            </nav>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-divider" />
                        <div className="left-slide-h-price">
                            <h6 id="w-node-_31e2ab80-a88e-a24f-d579-30034e4dc8ab-fc9d8ccc" className="lefts-side-h">KREDITLI QİYMƏT</h6>
                        </div>
                        <div id="w-node-b73e2320-c10d-96b2-b36d-6b6d3655c315-fc9d8ccc" className="price-module">
                            <div className="price-form w-form">
                                <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get" className="price-elements">
                                    <input type="text" className="min-price w-input" maxLength={1} name="name" data-name="Name" placeholder="Min:" id="name" />
                                    <input type="email" className="max-price w-input" maxLength={10000} name="email-4" data-name="Email 4" placeholder="Max:" id="email-4" required />
                                    <input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button w-button" />
                                </form>
                                <div className="w-form-done" />
                                <div className="w-form-fail" />
                            </div>
                        </div>
                        <div className="sidebar-divider" />
                        <div id="w-node-b5c5450a-b042-e723-9859-35ef1cf00ee0-fc9d8ccc" className="left-slide-h-filter">
                            <h6 id="w-node-_819d9050-cdf0-9644-5318-d5ddfebf1cd6-fc9d8ccc" className="lefts-side-h">fİlter</h6>
                        </div>
                        <div className="filter-module">
                            <div className="fltr-area">
                                <ul className="fltr-list">
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div className="fltr-item-h">Rəng</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Mavi</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">Qırmızı</a>
                                            </nav>
                                        </div>
                                    </li>
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>materİal</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Taxta</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Fısdıq ağacı</a>
                                                <a className="fltr-dp-list text-sm w-dropdown-link">Palıd ağacı</a>
                                            </nav>
                                        </div>
                                    </li>
                                    <li className="fltr-item">
                                        <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
                                            <div className="fltr-toggle w-dropdown-toggle">
                                                <div>ölçü</div>
                                                <img src={AddIcon} loading="lazy" alt="" className="add-icon wh-24" />
                                            </div>
                                            <nav className="fltr-drpdown w-dropdown-list">
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">300x400x500</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">200x200x200</a>
                                                <a  className="fltr-dp-list text-sm w-dropdown-link">200x400x100</a>
                                            </nav>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                 </div>
 
                     <div className="w-layout-grid right-side">
 
                         {
                            Products ? Products.map((index, key) =>
                            <div id="w-node-b159fb1f-b7ac-c1a6-dc13-725622bb6de8-22bb6de8" className="product-img" key={key}>
                               { !wishList.includes(index.productId) &&
                                <div onClick={()=>wishListAdd(index.productId)} className="love-icon-badge"><img src={HeartIcon} loading="lazy" alt="" className="wh-20" /></div>
                                }
                                {wishList.includes(index.productId) &&
                                <div onClick={()=>wishListDelete(index.productId)} className="love-icon-badge"><img src={redHeart} loading="lazy" alt="" className="wh-20" /></div>
                                }
                                <Link to={"/mehsul/" + index.productId} className="product-dv-img w-inline-block">
                                    <div className="prd-dv">
                                        <img
                                            src={"https://ferrumcapital.s3.eu-north-1.amazonaws.com" + index.imageUrl}
                                            loading="lazy"alt=""
                                            className="product-image-h"
                                        />
                                    </div>
                                </Link>
                                <div className="product-heading">
                                    <h6 className="prd-title">{index.productName}</h6>
                                    <div className="total-price">{index.price} ₼</div>
                                </div>
                                <div className="prd-prc">
                                    <div className="month">
                                        <div className="prd-month">12 ay</div>
                                        <div className="prd-price">{(index.price/12).toFixed(2)}  ₼</div>
                                    </div>
                                </div>
                            </div>
                            ) : <></>
                        }
                    </div>
                </div>
                {/* <div className="pagination">
                    <a  className="pag-left gap-r-24 w-inline-block">
                        <img src={LeftIcon} loading="lazy" alt="" className="wh-20" />
                    </a>
                    <a  className="num gap-r-12 w-inline-block">
                        <div className="num-pag active">1</div>
                    </a>
                    <a  className="num w-inline-block">
                        <div className="num-pag">2</div>
                    </a>
                    <a  className="pag-right gap-l-24 w-inline-block">
                        <img src={RightIcon} loading="lazy" alt="" className="wh-20" />
                    </a>
                </div> */}
            </div>
        </div>
    );
}