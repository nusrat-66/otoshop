
 

export default function CampaignBannerComp({imageUrl}) { 

    return(
        <div className="campaign-banner-section wf-section">
            <div className="dv-wrapper">
                <div className="ads-banner-full-div">
                <img src={imageUrl} loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 94vw, 95vw" alt="" className="ads-banner-full" />
                </div>
            </div>
        </div>
    )
};