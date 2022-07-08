import { useState, useEffect } from "react";
import agent from "../../../api/agent";
import {Link } from 'react-router-dom';

export default function CampaignsAlotComp() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaignsData = async () => {
      const campaignsData = await agent.CampaniyaRelated.getCampaigns();
      setCampaigns(campaignsData);
    };
    getCampaignsData();
  }, []);

  console.log(campaigns, "ssssssssss");

  return (
    <div className="campaign-list wf-section">
      <div className="dv-wrapper">
        <div className="w-layout-grid campaing-grid">
          {campaigns.map((item) => (
            <Link
              key={item.id}
              id="w-node-fd6d2081-98f7-117f-38b5-f9bb069c763a-a57ae80c"
              to={"/kampaniya/" + item.id}
              className="left-campgn w-inline-block"
            >
              <img
                src={'https://ferrumcapital.s3.eu-north-1.amazonaws.com' + item.imageUrlHeadBanner}
                loading="lazy"
                sizes="100vw"
                alt=""
                className="left-ads-img"
              />
            </Link>
          ))}
          {/* <div id="w-node-fd6d2081-98f7-117f-38b5-f9bb069c763c-a57ae80c" className="right-campgn">
                    <div className="right-1">
                    <img src={Ads2IMG} loading="lazy" sizes="100vw" alt="" />
                    </div>
                </div>
                <div id="w-node-fd6d2081-98f7-117f-38b5-f9bb069c763f-a57ae80c" className="right-campgn">
                    <div className="right-2">
                    <img src={Ads3IMG} loading="lazy" sizes="100vw" alt="" />
                    </div> 
                </div> */}
        </div>
      </div>
    </div>
  );
}
