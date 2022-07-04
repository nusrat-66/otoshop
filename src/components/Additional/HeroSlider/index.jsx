import React, { useEffect, useState } from 'react';
import {publicLinks} from '../../../App';
import { Link } from "react-router-dom";
import axios from 'axios';
var decode = require('decode-html');
export default function HeroSlider() {
    const [slideText, setSlideText] = useState();
    const [slideDescription, setSlideDescription] = useState();
    const [slideButtonText, setSlideButtonText] = useState();
    const [slideButtonColor, setSlideButtonColor] = useState();
    const [slideButtonBGColor, setSlideButtonBGColor] = useState();
    const [slideBGImage, setslideBGImage] = useState();
    const [sliderectangleColor, setrectangleColor] = useState();
    const [componentActive, setComponentActive]=useState(false)

    const [HeroData, setHeroData] = useState(false);
    const [LastHero, setLastHero] = useState(0);
    var preLoaderStyle = {
        display: "flex"
    };
    useEffect(() => {
        axios({
            method: 'get',
            baseURL: 'https://apis.digimall.az/api/Cehizim/GetSliders',
            headers: {
                'Content-Type' : 'application/json',
                'api-key' : '620C471E-05CC-4D90-9817-B7A3EED57E1B'
            }
        }).then(function (response) {
            setHeroData(response.data)
            setSlideText(response.data[0].title)
            setSlideDescription(decode(response.data[0].description));
            setSlideButtonText(response.data[0].buttons[0].title);
            setSlideButtonColor(response.data[0].buttons[0].color);
            setSlideButtonBGColor(response.data[0].buttons[0].background);
            setslideBGImage('https://cdn.otomall.az/' + response.data[0].imageUrl);
            setrectangleColor(response.data[0].rectangleColor);
            setComponentActive(true)
        });
        // setInterval(() => {
        //     setLastHero(LastHero => LastHero + 1);
        //     console.log(HeroData.length, "kkk" );
        // }, 1000);
    }, [])
    useEffect(() => {
        console.log(LastHero);
        console.log(HeroData);
    }, [LastHero])
    return(
        <>
                {!componentActive && <div id="preloader" style={preLoaderStyle} className="sc-AykKC ceHfpt">
                <div className="sc-AykKH gNkidG"><span></span></div><div className="preloader-text">Yüklənir...</div>
            </div>}
       {  
        <div className="hero-slider wf-section" Style={`background-color: ${sliderectangleColor} ;`}>
            <div className="w-layout-grid hero-grid">
                <div id="w-node-bf980d3e-df69-3278-3bda-2a5fa6247eef-39a5ea85" className="hero-right bg-color">
                    <div className="content-row">
                        <h1 className="slider-main-text">{slideText}</h1>
                        <div className="slider-desc" dangerouslySetInnerHTML={{__html: slideDescription}}></div>
                        <Link to={publicLinks.product} className="btn-slide-area w-inline-block">
                            <div className="btn-slide" Style={`color: ${slideButtonColor}; background-color: ${slideButtonBGColor};`}>{slideButtonText}</div>
                        </Link>
                    </div>
                </div>
                <img
                    src={slideBGImage}
                    loading="lazy"
                    sizes="100vw"
                    id="w-node-abeb76eb-7d1a-400d-5d62-f2c117a903e3-39a5ea85"alt=""
                    className="hero-image"
                />
            </div>
        </div>}
        </>
    )
}