import React, {useState, useEffect} from 'react';
import {publicLinks} from '../../../App';
import {Link} from 'react-router-dom';
import NavbarItems from '../navbarItems';
const axios = require('axios');
export default function NavigationBar() {
    const [catData, setCatData] = useState();
    const [isShown, setIsShown] = useState(false);
    
    useEffect(() => {
        axios({
            method: "GET",
            baseURL: "https://apis.digimall.az/api/Cehizim/GetCategoriesWithCreditSettings",
            headers: {
                'Content-Type': 'application/json',
                'api-key' : '620C471E-05CC-4D90-9817-B7A3EED57E1B'
            },
        }).then( function(response) {
            setCatData(response.data);
        });
    }, []);
    
    return(
        <div className="nav-navigation">
            <div className="dv-nav-wrapper">
                <div className="nav-flex">
                    <div className="row-menu row-menu_oto">

{/* 
<div className="menuItems">
    <ul className='menuItems__ul'>
        <li className='menuItems__li'>
            Ana Səhifə 
        </li>
        <li className='menuItems__li'>
            Ana Səhifə 
        </li>
        <li className='menuItems__li'>
            Uyğun qiymətlilər
        </li>
        <li className='menuItems__li'>
            Kampaniyalar
        </li>
        <li className='menuItems__li'>
            Qış maşınları
        </li>
        <li className='menuItems__li'>
            Koreya maşınları
        </li>
    </ul>
</div> */}


                        
                        <div className="nav-menu-wrap">
                                           <NavbarItems title="Ana Səhifə"/>
                                           <NavbarItems title="Secim"/>
                                           <NavbarItems title="Uyğun qiymətlilər"/>
                                           <NavbarItems title="Kampaniyalar"/>
                                           <NavbarItems title="Qış maşınları"/>
                                           <NavbarItems title="Koreya maşınları"/>
                                    
                         </div>
                        <div className="right-row right-row_end">
                            {/* <div className="row-menu-dvr" /> */}
                            {/* <div className="inspiration">
                                <Link to="/ilhamlanma" className="nav-link-insp insp">İlhamlanma</Link> <img src="https://assets.website-files.com/620a985e7541fc8c1ca5ea83/620b7e25b9697492a1519018_line.svg" loading="lazy" alt="" className="insp-line" /> </div> */}

                            <Link to="/endirimler"  className="sale text-sm w-inline-block">
                                <div className="sale-text">Endİrİmlər </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}