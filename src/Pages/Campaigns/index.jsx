import Announce from '../../components/Head/Announce/index';
import Navbar from '../../components/Navbar/Head/index';
import NavigationBar from '../../components/Navbar/Bar';
import CookieAppear from '../../components/Additional/Cookie/index'
import Footer from '../../components/Footer/index';
import CampaignComp from '../../components/Campaigns/Main/index';
import CampaignBannerComp from '../../components/Campaigns/Banner/index';
import { useParams } from 'react-router-dom';
import agent from '../../api/agent';
import { useEffect, useState } from 'react';
import Bucket from '../../components/Additional/Bucket/index';
import Wishlist from '../../components/Additional/Wishlist';


export default function Faq() {

const [campaigns, setCampaigns] = useState ([])
const [imageUrl, setImageUrl] = useState ()

const params=useParams()

 useEffect(async () => {
const campaignResponse = await agent.CampaniyaRelated.getCampaign(params.id)
setCampaigns(campaignResponse)
if(campaignResponse[0]?.imageUrlHeadBanner)
setImageUrl("https://cdn.otomall.az/"+campaignResponse[0]?.imageUrlHeadBanner)
}, [])

    return(
        <>
        <Announce/>
        <Bucket />
        <Wishlist />
        <Navbar/>
        <div className="dropdown-overlay"></div>
        <NavigationBar/>
        <CampaignBannerComp imageUrl={imageUrl} />
        <CampaignComp campaigns={campaigns} />
        <CookieAppear/>
        <Footer/>
        </>
    );
}