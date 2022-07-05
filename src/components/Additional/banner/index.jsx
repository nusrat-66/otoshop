import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../../api/agent";

function Index() {
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    const getSlideData = async () => {
      const slideData = await agent.ProductRelated.getSlider();
      setSlide(slideData);
    };
    getSlideData();
  }, []);

  return (
    <div className="dv-wrapper">
      <div className="bannerWrapper">
        <div className="banner ">
          <div className="banner__content">
            <h1 className="banner__header">{slide[0]?.title}</h1>
            <Link
              to={`/${slide[0]?.buttons[0]?.link}`}
              className="banner__button"
            >
              {" "}
              Hissə-hissə al{" "}
            </Link>
          </div>
          <div className="bannerImgWrapper">
            <img
              className="banner__img"
              src={
                "https://ferrumcapital.s3.eu-north-1.amazonaws.com" +
                slide[0]?.imageUrl
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
