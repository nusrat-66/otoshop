import React, { useEffect, useState } from "react";
import agent from "../../../api/agent";
import { Link } from "react-router-dom";
import wheel from "../../../assets/images/oto/wheel.png";

function Index() {
  const pert = (data) => data;

  const [type, setType] = useState("newComers");

  const [newestPro, setNewestPro] = useState([]);

  useEffect(() => {
    const getNewestData = async () => {
      const newestData = await agent.ProductRelated.getNewestProduct();
      setNewestPro(newestData);
      console.log(newestData, "newesttt");
    };
    getNewestData();
  }, []);

  console.log(newestPro, "hhhh");

  return (
    <div className="dv-wrapper">
      <div className="produktlar">
        <div className="produktlar__buttons">
          {newestPro.map((item, index) => (
            <button
              key={index}
              onClick={() => setType("newComers")}
              className={
                type === "newComers"
                  ? "produktlar__button produktlar__button_active"
                  : "produktlar__button"
              }
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="w-layout-grid prd-grid campaign-cs-last">
          {newestPro.map((item) => ( 
           
            item.productDetails.map((product) => (
                <div key={product.productId} className="product-img">
                <Link
                  to={`/mehsul/st12121`}
                  className="product-dv-img w-inline-block"
                >
                  <div className="prd-dv">
                    <img
                      src={"https://ferrumcapital.s3.eu-north-1.amazonaws.com" + product.imageUrl}
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
                  <h6 className="prd-title prd-title_oto">{product.productName}</h6>
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
            ))
           
           
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
