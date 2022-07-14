import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeartIcon from "../../../assets/images/heart.svg";
import redHeart from "../../../assets/images/redHeart.svg";
import { useDispatch } from "react-redux";
import {
  deleteWishListStorage,
  addWishListStorage,
} from "../../../redux/actions";
import { useSelector } from "react-redux";
import agent from "../../../api/agent";
import frame from "../../../assets/images/frame.png";
import kamp2 from "../../../assets/images/oto/kamp2.png";
import wheel from "../../../assets/images/oto/wheel.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CampaignMain() {
  const [campaignShortContext, setCampaignShortContext] = useState(false);
  const [NewestData, setNewestData] = useState(false);

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaignsData = async () => {
      const campaignsData = await agent.CampaniyaRelated.getCampaigns();
      setCampaigns(campaignsData);
    };
    getCampaignsData();
  }, []);

  function resignprice(value, month) {
    let installemnt__ = value / month;
    return `${installemnt__.toFixed(2)} ₼ / ay`;
  }
  function pert(data) {}

  const wishList = useSelector((state) => state.wishList);

  const dispatch = useDispatch();
  const wishListAdd = (id) => {
    dispatch(addWishListStorage(id));
  };

  const wishListDelete = (id) => {
    dispatch(deleteWishListStorage(id));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };

  return (
    <div className="camp-list wf-section">
      <div className="dv-wrapper">
        <div
          id="w-node-_2e12d77d-8bc6-c5f6-5e60-6cbd75f84742-39a5ea85"
          className="campgn-heading-text"
        >
          <h3 className="section-title section-title_otoshop">Kampaniyalar</h3>
          <a href="/kampaniyalar" className="more-btn w-inline-block">
            <div className="more-text">
              <div className="see-mr">Hamısı</div>
              <img
                src="https://assets.website-files.com/620a985e7541fc8c1ca5ea83/620e341e0ecefe5d8342063c_arrow.svg"
                loading="lazy"
                alt=""
                className="see-more-icon"
              />
            </div>
          </a>
        </div>

        <div className="kampaniyalar">
          {campaigns.map((item) => (
            <Link key={item.id} to={"/kampaniya/" + item.id}>
              <img
                className="kampaniyalar__kampaniya"
                src={
                  "https://ferrumcapital.s3.eu-north-1.amazonaws.com" +
                  item.imageUrl
                }
                alt="kampaniya"
              />
            </Link>
          ))}

          <Link to={"/kampaniya/"}>
            <img
              className="kampaniyalar__kampaniya"
              src={frame}
              alt="kampaniya"
            />
          </Link>
        </div>

        <div className="prd-hd">
          <h3 className="section-title">Çox satanlar </h3>
        </div> 

        <div className="partners">
          <Slider {...settings}>
            <div className="partners__slick">
              <div className="product-img">
                <Link
                  to={`/mehsul/st12121`}
                  className="product-dv-img w-inline-block"
                >
                  <div className="prd-dv">
                    <img
                      src={wheel}
                      loading="lazy"
                      alt=""
                      className="product-image-h"
                    />
                  </div>
                </Link>
                <div
                  className="product-heading product-heading_oto"
                  onClick={pert(520)}
                >
                  <h6 className="prd-title prd-title_oto">product Name</h6>
                  <div className="total-price total-price_oto">{500} ₼</div>
                </div>
                <p className="product__sizeText"> Ölçü: 265-65-17</p>
                <div className="prd-prc">
                  <div className="month">
                    <div className="prd-month">12 ay</div>
                    <div className="prd-price">120 ₼ / ay</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="partners__slick">
              <div className="product-img">
                <Link
                  to={`/mehsul/st12121`}
                  className="product-dv-img w-inline-block"
                >
                  <div className="prd-dv">
                    <img
                      src={wheel}
                      loading="lazy"
                      alt=""
                      className="product-image-h"
                    />
                  </div>
                </Link>
                <div
                  className="product-heading product-heading_oto"
                  onClick={pert(520)}
                >
                  <h6 className="prd-title prd-title_oto">product Name</h6>
                  <div className="total-price total-price_oto">{500} ₼</div>
                </div>
                <p className="product__sizeText"> Ölçü: 265-65-17</p>
                <div className="prd-prc">
                  <div className="month">
                    <div className="prd-month">12 ay</div>
                    <div className="prd-price">120 ₼ / ay</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="partners__slick">
              <div className="product-img">
                <Link
                  to={`/mehsul/st12121`}
                  className="product-dv-img w-inline-block"
                >
                  <div className="prd-dv">
                    <img
                      src={wheel}
                      loading="lazy"
                      alt=""
                      className="product-image-h"
                    />
                  </div>
                </Link>
                <div
                  className="product-heading product-heading_oto"
                  onClick={pert(520)}
                >
                  <h6 className="prd-title prd-title_oto">product Name</h6>
                  <div className="total-price total-price_oto">{500} ₼</div>
                </div>
                <p className="product__sizeText"> Ölçü: 265-65-17</p>
                <div className="prd-prc">
                  <div className="month">
                    <div className="prd-month">12 ay</div>
                    <div className="prd-price">120 ₼ / ay</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="partners__slick">
              <div className="product-img">
                <Link
                  to={`/mehsul/st12121`}
                  className="product-dv-img w-inline-block"
                >
                  <div className="prd-dv">
                    <img
                      src={wheel}
                      loading="lazy"
                      alt=""
                      className="product-image-h"
                    />
                  </div>
                </Link>
                <div
                  className="product-heading product-heading_oto"
                  onClick={pert(520)}
                >
                  <h6 className="prd-title prd-title_oto">product Name</h6>
                  <div className="total-price total-price_oto">{500} ₼</div>
                </div>
                <p className="product__sizeText"> Ölçü: 265-65-17</p>
                <div className="prd-prc">
                  <div className="month">
                    <div className="prd-month">12 ay</div>
                    <div className="prd-price">120 ₼ / ay</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="partners__slick">
              <div className="product-img">
                <Link
                  to={`/mehsul/st12121`}
                  className="product-dv-img w-inline-block"
                >
                  <div className="prd-dv">
                    <img
                      src={wheel}
                      loading="lazy"
                      alt=""
                      className="product-image-h"
                    />
                  </div>
                </Link>
                <div
                  className="product-heading product-heading_oto"
                  onClick={pert(520)}
                >
                  <h6 className="prd-title prd-title_oto">product Name</h6>
                  <div className="total-price total-price_oto">{500} ₼</div>
                </div>
                <p className="product__sizeText"> Ölçü: 265-65-17</p>
                <div className="prd-prc">
                  <div className="month">
                    <div className="prd-month">12 ay</div>
                    <div className="prd-price">120 ₼ / ay</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="partners__slick">
              <div className="product-img">
                <Link
                  to={`/mehsul/st12121`}
                  className="product-dv-img w-inline-block"
                >
                  <div className="prd-dv">
                    <img
                      src={wheel}
                      loading="lazy"
                      alt=""
                      className="product-image-h"
                    />
                  </div>
                </Link>
                <div
                  className="product-heading product-heading_oto"
                  onClick={pert(520)}
                >
                  <h6 className="prd-title prd-title_oto">product Name</h6>
                  <div className="total-price total-price_oto">{500} ₼</div>
                </div>
                <p className="product__sizeText"> Ölçü: 265-65-17</p>
                <div className="prd-prc">
                  <div className="month">
                    <div className="prd-month">12 ay</div>
                    <div className="prd-price">120 ₼ / ay</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default CampaignMain;
