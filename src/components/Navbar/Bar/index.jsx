import React from 'react';
import {Link} from 'react-router-dom'; 
import NavbarItems from '../navbarItems';
import { useSelector } from 'react-redux';

export default function NavigationBar() {
     
    const {categorieReducer}=useSelector(state=>state)
    
    return(
        <div className="nav-navigation">
            <div className="dv-nav-wrapper">
                <div className="nav-flex">
                    <div className="row-menu row-menu_oto"> 
                        <div className="nav-menu-wrap">
                            {
                                categorieReducer.map((item,key) => (
                                    <NavbarItems key={key} title={item.name}/>
                                ))
                            }
                         </div>
                        <div className="right-row right-row_end">
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