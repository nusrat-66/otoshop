
import { Link } from "react-router-dom";
import HeartIcon from '../../../assets/images/heart.svg';
import ProductImage from '../../../assets/images/img-00122.png';
import wheel from "../../../assets/images/oto/wheel.png"

export default function RecentProduct() {
    const pert=()=>console.log();
    return(
        <div className="camp-list-product wf-section">
            <div className="dv-wrapper">
                <div className="prd-heading">
                <h3 className="section-title">Oxşar məhsullar</h3>
                <Link to="/mehsul" className="more-btn w-inline-block">
                    <div className="more-text">
                    <div className="see-mr">DAHA ÇOX</div>
                    <img src="images/arrow.svg" loading="lazy" alt="" className="see-more-icon" />
                    </div>
                </Link>
                </div>
                <div className="w-layout-grid prd-grid">
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
    );
}