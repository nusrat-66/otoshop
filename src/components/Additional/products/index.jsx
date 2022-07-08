import React, { useEffect, useState } from "react";
import agent from "../../../api/agent";
import { Link } from "react-router-dom";

function Index() {
  const pert = (data) => data;

  console.log(pert);

  const [newestPro, setNewestPro] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    const getNewestData = async () => {
      const newestData = await agent.ProductRelated.getNewestProduct();
      setNewestPro(newestData);
      setType(newestData[0].title);
    };
    getNewestData();
  }, []);

  return (
    <div className="dv-wrapper">
      <div className="produktlar">
        <div className="produktlar__buttons">
          {newestPro.map((item) => (
            <button
              key={item.id}
              onClick={() => setType(item.title)}
              className={
                type === item.title
                  ? "produktlar__button produktlar__button_active"
                  : "produktlar__button"
              }
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="w-layout-grid prd-grid campaign-cs-last">
          {newestPro.map((item) =>
            item.productDetails.map((product) =>
              product.creditSettingMonths.map((credit) => (
                <div
                  key={product.productId}
                  className={
                    type === item.title
                      ? "product-img"
                      : "product-img display_none"
                  }
                >
                  <Link
                    to={`/mehsul/${product.productId}`}
                    className="product-dv-img w-inline-block"
                  >
                    <div className="prd-dv">
                      <img
                        src={
                          "https://ferrumcapital.s3.eu-north-1.amazonaws.com" +
                          product.imageUrl
                        }
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
                    <h6 className="prd-title prd-title_oto">
                      {product.productName}
                    </h6>
                    <div className="total-price total-price_oto">
                      {product.price + (product.price * credit.percent) / 100} ₼
                    </div>
                  </div>
                  <p className="product__sizeText">
                    {" "}
                    Ölçü:{" "}
                    {product.width +
                      "-" +
                      product.height +
                      "-" +
                      product.diameter}
                  </p>
                  <div className="prd-prc">
                    <div className="month">
                      <div className="prd-month">{credit.month} ay</div>
                      <div className="prd-price">
                        {credit.discount
                          ? (
                              (product.price +
                                (product.price * credit.percent) / 100 -
                                ((product.price +
                                  (product.price * credit.percent) / 100) *
                                  credit.discount) /
                                  100) /
                              credit.month
                            ).toFixed(2)
                          : (
                              (product.price +
                                (product.price * credit.percent) / 100) /
                              credit.month
                            ).toFixed(2)}
                        ₼ / ay
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
