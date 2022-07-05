import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
 
function NavbarItems({title}) { 
    const [catData, setCatData] = useState();
    const [isShown, setIsShown] = useState(false);
  return (
<div data-hover="true" data-delay={0} className="nav-link nav-link-cs w-dropdown">
                                            <div className="dp-toogle w-dropdown-toggle" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0}>
                                             <Link style={{textDecoration:"none"}} to={`/category/cat-static`}>   <div className="text-sm uppr-sm uppr-sm__oto"> {title} </div></Link>
                                            </div>
                                              <nav className={isShown ? "dp-list w-dropdown-list" : "cs-dropdown-close"}>
                                                <div className="dv-wrapper dp">
                                                    <div className="w-layout-grid dp-grid">
                                                        <div id="w-node-cbc0b599-b523-719d-7d8d-241bc5a2a70d-c5a2a701" className="dp-category">
                                                            <div className="dp-category-h"><img src="https://assets.website-files.com/620a985e7541fc8c1ca5ea83/620bf630df2e0f6fa4fb59e5_bedroom.svg" loading="lazy" alt="" className="wh-24 gap-l-12" />
                                                            <Link style={{textDecoration:"none"}} to={`/category/cat-Static`}>
                                                                <a id="w-node-_82b95ddb-5cb1-07e9-499d-babad4a0eb72-c5a2a701"  className="text-sm uppr-sm f-w-600" tabIndex={0}>catStaticName</a>
                                                            </Link>
                                                            </div>
                                                            <div className="dp-category-list">
                                                                <ul role="list" className="dp-list-name">
                                                                <Link  style={{textDecoration:"none"}} to={`/category/sub-staticSub`}> <li  className="list-item gap-b-16 text-base f-w-300"> <a href="" className="list-name" tabIndex={0}>statc sub1</a></li></Link>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="w-layout-grid dp-grid-img">
                                                            <a href="" className="dp-product w-inline-block" tabIndex={0}>
                                                                <img src="https://assets.website-files.com/620a985e7541fc8c1ca5ea83/620bfea935b2441433ddd9e0_Chanel%20yataq%20d%C9%99sti.png" loading="lazy" alt="" className="dp-product-img" />
                                                            </a>
                                                            <a href="" className="dp-product w-inline-block" tabIndex={0}>
                                                                <img src="https://assets.website-files.com/620a985e7541fc8c1ca5ea83/620bfea935b2441433ddd9e0_Chanel%20yataq%20d%C9%99sti.png" loading="lazy" alt="" className="dp-product-img" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                         </div>
  )
}

export default NavbarItems