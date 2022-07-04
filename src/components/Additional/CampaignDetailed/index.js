import React, {useEffect, useState} from 'react';
import {publicLinks} from '../../../App';
import axios from 'axios';

export default function CampaignDetailed() {
    const [HighlitsData, setHighlitsData] = useState(false);
    useEffect(() => {
        axios({
            method: 'get',
            baseURL: 'https://apis.digimall.az/api/Cehizim/GetHighlights',
            headers: {
                'Content-Type': 'application/json',
                'api-key' : '620C471E-05CC-4D90-9817-B7A3EED57E1B'
            }
        }).then(function (response) {
            let res__ = response.data;
            setHighlitsData(res__)
        });
        
    }, []);
    function createArrayForButton(data) {
        if(data)
            var tmp__ = data.split(";");
            return tmp__[0]
    }
    function createArrayForButtonLink(data) {
        if(data) {
            var tmp__ = data.split(";");
            return tmp__[1]
        }
        else {
            return "https://cehizim.az"
        }     
    }
    return(
        <>
        <div className="spc-section wf-section">
            <div className="dv-wrapper">
            {HighlitsData ? HighlitsData.map((index, key) => 
                <div className="w-layout-grid spc-banner" key={key}>
                    <div className="spc-1-dv">
                        <img
                            src={'https://cdn.otomall.az/' + index.imageUrl}
                            loading="lazy"
                            width="{675}"
                            id="w-node-_8c6567e9-f24b-96a8-f949-77edcd07ad73-39a5ea85"
                            sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 96vw"
                            alt=""
                            className="spc-img-1"
                        />
                    </div>
                    <div className="section-beside background">
                        <div className="container-spc">
                            <h3 id="w-node-_4c868999-bec2-9818-7d22-d7131b580f2b-39a5ea85" className="spc-heading">{index.title}</h3>
                            <div className="alt-text">
                                <div id="w-node-_3de1c83f-d8e3-de6c-c557-87e2dc93ae5b-39a5ea85" className="alt-text-desc">
                                    <div dangerouslySetInnerHTML={{__html: index.description}} />
                                </div>
                                <a href={createArrayForButtonLink(index.button)} className="btn-spc w-inline-block">
                                    <div className="btn-slide">{ createArrayForButton(index.button) }</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                )
                : <></>}
            </div>
        </div>
        
        </>
    )
}