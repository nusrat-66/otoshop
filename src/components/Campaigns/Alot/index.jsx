import Ads1IMG from '../../../assets/images/ads-1.png';
import Ads2IMG from '../../../assets/images/ads-2.png';
import Ads3IMG from '../../../assets/images/ads-3.png';
export default function CampaignsAlotComp() {
    return(
        <div className="campaign-list wf-section">
            <div className="dv-wrapper">
                <div className="w-layout-grid campaing-grid">
                <a id="w-node-fd6d2081-98f7-117f-38b5-f9bb069c763a-a57ae80c" href="kampaniya.html" className="left-campgn w-inline-block">
                    <img src={Ads1IMG} loading="lazy" sizes="100vw" alt="" className="left-ads-img" />
                </a>
                <div id="w-node-fd6d2081-98f7-117f-38b5-f9bb069c763c-a57ae80c" className="right-campgn">
                    <div className="right-1">
                    <img src={Ads2IMG} loading="lazy" sizes="100vw" alt="" />
                    </div>
                </div>
                <div id="w-node-fd6d2081-98f7-117f-38b5-f9bb069c763f-a57ae80c" className="right-campgn">
                    <div className="right-2">
                    <img src={Ads3IMG} loading="lazy" sizes="100vw" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}