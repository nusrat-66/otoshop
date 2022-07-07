import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InasaleBadgeIcon from "../../../assets/images/insale-badge.svg";
import "../../../assets/styles/yeni.css";
import HeartIcon from "../../../assets/images/heart.svg";
import redHeart from "../../../assets/images/redHeart.svg"
import ArrowIcon from "../../../assets/images/bc-arrow.svg";
import ProductDescription from "../Description/index";
import ProductSuitable from "../Suitable/index";
import RecentProduct from "../Recent/index";
import ItemGallery from "../../Additional/ImageSlider/index";
import { useDispatch, useSelector } from "react-redux";
import { insertItem, increaseItem, addWishListStorage, deleteWishListStorage } from "../../../redux/actions";
import { dinamicFieldTaker } from "../../../functions/function";
import axios from "axios"
import agent from "../../../api/agent";
 import "../../../assets/styles/styleForOtoshop2.css";
 import {BucketIcon, Wallet, Medal, Medal2, Truck, BucketIconBlue, HeadPhone} from "../../../assets/images/svg/svg";
 import SocialMediaLanding from "../../../components/SocialMedia/Landing/index";
 import Modal from "./modal"
 
 

 var decode = require('decode-html');
 
export default function ProductDetailsComp() {

    const Buckets=useSelector((state)=>state.buckets)
    const payment=useSelector((state)=>state.paymantType)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);
    const inputKeyDown=(e)=> {
 
   
     }

 const inputChange = (e) => {
    if(e.nativeEvent.data!=='e')
     setQuantity(e.target.value)
        };
    const [clickText, setClickText] = useState(false);
    const Categories=useSelector((state)=>state.categorieReducer)
    const wishList=useSelector((state)=>state.wishList)
    let params = useParams();
    const [Slide, setSlide] = useState({width: 350});
    const [ProductDetails, setProductDetails] = useState(false);
    const [Installement, setInstallement] = useState(null);
    const [InstallementPrice, setInstallementPrice] = useState();
    const [ProductFullSTate, setProductFullSTate] = useState(false);
    const [ProductDescriptionInfo, setProductDescriptionInfo ] = useState(false);
    const [ProductFeaturesInfo, setProductFeaturesInfo ] = useState(false);
    const [dinamicField, setDinamicField] = useState()
    const [categorie, setCategorie] = useState()
    const [monthForSlider, setMonthForSlider] = useState([])
    const [percent, setPercent] = useState()
    const [monthId, setMonthId] = useState()
    const [inBucket, setInBucket] = useState(false)
    const [wishListAdded, setWishListAdded]=useState(false)
    const [creditSettingsForProduct, setCreditSettingsForProduct]=useState(null)
    const [images, setImages]=useState([])
    const [material, setMaterial] = useState(false)
    const [color, setColor] = useState(false)
    const [allColors, setAllColors] = useState(false)
    const [ComplimentaryTag, setComplimentaryTag] = useState(false)     
    const [relateds, setRelateds] = useState([])


 

    useEffect(async() => {
        const {categoryId, id}=ProductDetails
         let bucketIdInstallment=null
        let bucketIdNonInstallment=null
        Buckets.forEach((bucket)=>{
            if(bucket.id==id){
                if(bucket.installment){
                    bucketIdInstallment=true
                }else{
                    bucketIdNonInstallment=true
                }
            }
        })
        if(bucketIdInstallment || bucketIdNonInstallment){
            setClickText("Əlavə edildi")
            setTimeout(()=>setClickText(""), 3000)
        if(bucketIdInstallment && bucketIdNonInstallment){
            setInBucket("both")
        }else if(bucketIdInstallment){
            setInBucket("installment")
        }else{
            setInBucket("nonInstallment")
        }
        }else{
            setClickText(false)
            setInBucket(false)
        }
        let creditSettings=null
          if(ProductDetails?.creditSettingMonthOnly){
             creditSettings = await agent.BucketRelated.getCreditSettingsById(ProductDetails?.creditSettingMonthOnly[0].creditSettingId)
             setCreditSettingsForProduct(creditSettings)
        }
 
        if(creditSettings){
            const monthArray=creditSettings
            const arrLength=monthArray.length
            setPercent(monthArray[0]?.percent)
            const monthArrayMock=monthArray.sort((a, b)=>a.month-b.month).map((mock, index) => {
                const value=arrLength>1?(index/(arrLength-1))*100:0;
                return {
                    value, label:mock.month
                }
            })
            setInstallement(monthArrayMock[0]?.label)
            setMonthForSlider(monthArrayMock.sort((a, b)=>a.label-b.label))
            var last__ = ((ProductDetails.price+ProductDetails.price*monthArray[0]?.percent/100) /monthArrayMock[0]?.label).toFixed(2)
            setInstallementPrice(last__)
        }

        Categories.forEach((element, index) => {
             if(element.id===categoryId){
                setCategorie(element)
                 if(creditSettings){
                     return
                }
                  const monthArray=element.creditSetting.creditSettingMonth
                 const arrLength=monthArray.length ;
                setPercent(monthArray[0]?.percent)
                const monthArrayMock=monthArray.sort((a, b)=>a.month-b.month).map((mock, index)=>{
                    const value=arrLength>1?(index/(arrLength-1))*100:0;
                    return {
                value, label:mock.month}
                })
                setInstallement(monthArrayMock[0].label)
                 setMonthForSlider(monthArrayMock)
                var last__ = ((ProductDetails.price+ProductDetails.price*monthArray[0]?.percent/100) /monthArrayMock[0].label).toFixed(2)
                setInstallementPrice(last__)
            }
        });
    }, [ProductDetails, Categories, Buckets, dinamicField, params.mehsulId])

    useEffect(() => {
        if(wishList.includes(parseInt(params.mehsulId))){
            setWishListAdded(true)
        }
    }, [wishList, params.mehsulId])

    useEffect(() => {
        if(ProductDetails){
            setDinamicField(dinamicFieldTaker(ProductDetails.dynamicFiledsList))
        }
    }, [ProductDetails, params.mehsulId])

     useEffect(() => {
        let mockImageArr=[]
        if(ProductDetails?.imageUrl)
        mockImageArr.push({image:"https://ferrumcapital.s3.eu-north-1.amazonaws.com"+ProductDetails.imageUrl})
        if(dinamicField?.image2)
        mockImageArr.push({image:"https://ferrumcapital.s3.eu-north-1.amazonaws.com"+dinamicField.image2})
        if(dinamicField?.image3)
        mockImageArr.push({image:"https://ferrumcapital.s3.eu-north-1.amazonaws.com"+dinamicField.image3})
         if(dinamicField?.image4)
        mockImageArr.push({image:"https://ferrumcapital.s3.eu-north-1.amazonaws.com"+dinamicField.image4})
            setImages(mockImageArr)
    }, [dinamicField, params.mehsulId])


    function valuetext(value) {
        return monthForSlider.find((marks)=> marks.value === value).label + " Ay";
    }
    function valueLabelFormat(value){
        return monthForSlider.find((marks)=> marks.value === value).label + " Ay";
    }
    const getSlideData = (event, newValue) => {
        var slideValue = (monthForSlider.find((marks)=> marks.value === newValue).label);
        setInstallement(slideValue)
        var last__ = ((ProductDetails.price + (ProductDetails.price*percent/100))/Installement).toFixed(2)
        setInstallementPrice(last__)
    }
    function getProductDetail() {
        axios({
            method: "POST",
            baseURL: "https://apis.digimall.az/api/Queries/ProductFieldSearchForOtoShop",
            headers: {
                'api-key': 'D74AE0D0-6F20-40AA-B4C9-FC138D66EF10' 
            },
            data: {
                languageId: 25,
                productsId: parseInt(params.mehsulId)
            }
        }).then(function(response) {
            setProductDetails(response.data);
            setInstallementPrice(Number(response.data.price/Installement).toFixed(2));
        })
    }
    useEffect(() => {
        getProductDetail()
    }, [params.mehsulId])

     useEffect(() => {
        if(ProductDetails) {
            try{
            setProductFullSTate(true);
            setProductDescriptionInfo(ProductDetails["dynamicFiledsList"].find((dynamicFiledsList)=> dynamicFiledsList.attributeId === 12).value);
            setProductFeaturesInfo(ProductDetails["dynamicFiledsList"].find((dynamicFiledsList)=> dynamicFiledsList.attributeId === 13).value);
            setMaterial(ProductDetails["dynamicFiledsList"].find((dynamicFiledsList)=> dynamicFiledsList.attributeId === 10).value);
            var colorData = ProductDetails["dynamicFiledsList"].find((dynamicFiledsList)=> dynamicFiledsList.attributeId === 8).value;
            setColor(colorData);
            setComplimentaryTag(ProductDetails["dynamicFiledsList"].find((dynamicFiledsList)=> dynamicFiledsList.attributeId === 10021).value);
            }catch(e){

            }
            }
    }, [ProductDetails, params.mehsulId])

    useEffect(() => {
        if(ComplimentaryTag !== false) {
            axios({
                method: "POST",
                baseURL: "https://apis.digimall.az/api/Queries/CehizimGetProductByTag",
                headers: {
                    'api-key': 'D74AE0D0-6F20-40AA-B4C9-FC138D66EF10' 
                },
                data: {
                    languageId: 19,
                    tag: ComplimentaryTag
                }
            }).then(function(response) {
                setAllColors(response.data);
            })
        }
    }, [ComplimentaryTag, params.mehsulId])
 
     useEffect(() => {
         if(creditSettingsForProduct){
            creditSettingsForProduct.forEach((element)=>{
                if(element.month==Installement){
                    setPercent(element.percent)
                    setMonthId(element.id)
                }
            })
            return
        }
    
        if(categorie?.creditSetting?.creditSettingMonth){
                categorie.creditSetting.creditSettingMonth.forEach((element)=>{
                    if(element.month==Installement){
                        setPercent(element.percent)
                        setMonthId(element.id)
                    }
                })
            }
        }, [Installement, params.mehsulId])
 


     const insertToStore = (instlmnt) => {
        if((inBucket=="installment" && instlmnt) || (inBucket=="nonInstallment" && !instlmnt) || (inBucket=="both")) {
            dispatch(increaseItem(ProductDetails.id, instlmnt, quantity))
            return
        }
        dispatch(insertItem({
            title: ProductDetails.productName,
            count: quantity,
            price: ProductDetails.price,
            installment: instlmnt,
            color: dinamicField.Color,
            id: ProductDetails.id,
            size: dinamicField.Size,
            productId:parseInt(params.mehsulId) ,
            providerId: ProductDetails.providerId,
            providerName: ProductDetails.providerName,
            productPriceId: ProductDetails.priceId,
            totalPrice:ProductDetails.price * quantity,
            insallmentMonthId: monthId,
            month: Installement,
            percent,
            unvanId:null,
            image:ProductDetails.imageUrl,
            material:dinamicField.material

        },));
    return
    };


 
    const wishListAdd=()=>{
        dispatch(addWishListStorage(parseInt(params.mehsulId)))
        setWishListAdded(true)
    }
     const wishListDelete=()=>{
        dispatch(deleteWishListStorage(parseInt(params.mehsulId)))
        setWishListAdded(false)
    }


useEffect(async () => {
    if(ProductDetails && material && color && relateds.length==0 ){
 const mockRelatedProducts=await agent.ProductRelated.relatedProducts({
   "productId": parseInt(ProductDetails.id),
   "categoryId":parseInt(ProductDetails.categoryId),
   "color": color,
   "material": material,
   "skip": 0,
   "take": 4
 })
 setRelateds(mockRelatedProducts)
}
}, [ProductDetails, material, color])


 
const increase=()=>{
  setQuantity(quantity+1)
  }
  const decrease=()=>{
      if(quantity>1)
      setQuantity(quantity-1)
      }


 
     return (
        <>   {ProductFullSTate !== false ? <div className="prdct-page-title wf-section">
        <div className="dv-wrapper">
          <div className="w-layout-grid product-grid">
            <div id="w-node-_393f6ea9-ca5e-3433-b581-793138fa8ea6-64a99980" className="w-layout-grid product-gallery">
              <div id="w-node-_488c128a-2c9e-e480-7748-11567949b21d-64a99980" className="product-image-pp-cs"> {dinamicField['inSale']=='true' && <div className="insale-bagde">
                  <img src={InasaleBadgeIcon} loading="lazy" alt="" className="image-10" />
                </div>}
                <ItemGallery images={images} />
              </div>
            </div>
            <div id="w-node-b307f13c-d9b0-65cb-3f52-787d4648cafa-64a99980" className="vertical-border" />
            <div id="w-node-_3675dd52-6bad-50e5-66d1-f71b86820dfb-64a99980" className="product-desc">
              <div className="breadcrumbs">
                <div className="brdc-block">
                  <Link to="/" className="text-link">Ana Səhİfə</Link>
                  <img src={ArrowIcon} loading="lazy" alt="" className="arrow-icon" />
                  <Link to="/" className="text-link">{ProductDetails.categoryName} </Link>
                  <img src={ArrowIcon} loading="lazy" alt="" className="arrow-icon" />
                  <a className="text-link active">{ProductDetails.modelName} </a>
                </div>
              </div>
              <div id="w-node-d878a3e8-be2a-b8c6-c9b3-800ea08aace7-64a99980" className="product-id">#{params.mehsulId}</div>
              <div id="w-node-_5628732a-e436-44f0-af94-4d2ca29be539-64a99980" className="id-star-dv">
                <h3 id="w-node-_0810db4c-9db1-7ecf-6984-732a1db8a3f6-64a99980" className="product-name">{ProductDetails.productName}</h3> {/* <div className="star-dv">
                  <img src={StarIcon} loading="lazy" alt="" className="wh-20 left" />
                  <div id="w-node-e636605d-5f01-cd9f-2fa6-0601fa913135-64a99980" className="star-point">4.9/5 </div>
                </div> */}
              </div>
              <div className="product-price-block"></div>
              <div className="horizon-divider" />
              <div id="w-node-e50489ec-992b-c6c4-1a49-3f878f61b7f0-64a99980" className="w-layout-grid product-details">
                <div id="w-node-_57aa21eb-4ac2-918e-8947-13962927ece0-64a99980" className="details details_oto">
                  <div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Marka:</div>
                      {
                        console.log(dinamicField, 'dinamikField')
                      }
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980"  className="dtls-value">{dinamicField.marka}</div>
                    </div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Model:</div>
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980" className="dtls-value">{ProductDetails.modelName}</div>
                    </div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Ölçü:</div>
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980" className="dtls-value">{dinamicField.size}</div>
                    </div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Mövsüm:</div>
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980" className="dtls-value">{dinamicField.season}</div>
                    </div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Sürət indexi:</div>
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980" className="dtls-value">{dinamicField.speedindex}</div>
                    </div>
                  </div>
                  <div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Tipi:</div>
 
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980"  className="dtls-value">{dinamicField.type}</div>
                    </div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Zəmanət:</div>
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980" className="dtls-value">{dinamicField.guaranrtyYear} il</div>
                    </div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Ölkə:</div>
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980" className="dtls-value">{dinamicField.brandcountry}</div>
                    </div>
                    <div className="material material_between">
                      <div className="dtls-name dtls-name_oto">Yük indexi:</div>
                      <div id="w-node-_60f3ba70-b199-4054-c931-a4a02c89ff98-64a99980" className="dtls-value">{dinamicField.weightindex}</div>
                    </div>
                  </div>
                </div>
                 <p className="detailedd__price"> {percent && ProductDetails.price+(ProductDetails.price*percent/100)} ₼ </p>
                <div className="quantity-num quantity-num_sp">
                  <div id="w-node-a2352cfa-8505-efb8-4322-77c228775df2-64a99980" className="quantity-bar">
                    
                    <div className="det-quantity w-embed det-quantity_oto">
                      <span onClick={decrease} className="det-quantity_plus">-</span>
                      <input style={{ paddingLeft: "1rem" }} pattern="^[0-9]+$" inputMode="numeric" value={quantity} onChange={inputChange} className="crt-quantity crt-quantity_oto" type="number" name="quantity" defaultValue={1} min={1} max={10} />
                      <span onClick={increase} className="det-quantity_plus">+</span>
                    </div>
                  </div>
                  <div className="cashButton">
                    <div className="cashButton__button">
                      <span>{clickText ? clickText : "NAĞD Al"}</span>
                    </div>
                    <div onClick={()=> insertToStore(null)} className="cashButton__icon">
                      <BucketIcon />
                    </div>
                  </div>
                </div>
                <div className="horizon-divider" />
                <div className="monthDetailed"> {monthForSlider.length>1 && <div id="w-node-_12443a67-3ce7-1ff2-132f-1a424242144e-64a99980" className="product-month-rate">
                    <div className="w-layout-grid month-rate">
                      <div className="pay-form w-form">
                        <form method="get" className="month-rate-calc month-rate-calc-cs">
                          <div className='dtls-pl slider-cs-for-month'>
                            <div className="month-slct-text">Ay seçimi</div>
                            <Box sx={Slide}>
                              <Slider aria-label="Restricted values" defaultValue={0} valueLabelFormat={valueLabelFormat} getAriaValueText={valuetext} valueLabelDisplay="auto" step={null} marks={monthForSlider} onChange={getSlideData} />
                            </Box>
                          </div>
                          <div className="dtls-pl dtls-pl-gap">
                            <div id="w-node-bc45b633-affd-5535-37ed-620486a57e4c-64a99980" className="dtls-lp-vl">Aylıq ödəniş </div>
                            <div className="dtls-lp-pc">{InstallementPrice} AZN </div>
                          </div>
                        </form> {/* <button id="w-node-a3b2fc62-de35-5872-20b8-11618c346c51-64a99980" onClick={()=>insertToStore(Installement)} className="buy-ltr w-button" > {" "} {clickText ? clickText : "Hİssə-hİssə ödə"}{" "} </button> */} <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </div>
                  </div>} </div>
              </div>
            </div>
          </div>
          <div className="detailedFooter w-layout-grid product-grid">
            <div className="detailedFooter__buttons detailedFooter__buttons_first w-layout-grid product-gallery_mb0">
              <div className="detailFooter__buttonWrapper">
                <div className="detailFooter__button">
                  <Truck />
                  <span className="detailedFooter__text">Sərfəli Kredit</span>
                </div>
              </div>
              <div className="detailFooter__buttonWrapper detailFooter__buttonWrapper_second">
                <div className="detailFooter__button">
                  <Medal  />
                  <span className="detailedFooter__text">Montaj </span>
                </div>
              </div>
              <div className="detailFooter__buttonWrapper">
                <div className="detailFooter__button">
                  <Medal2  />
                  <span className="detailedFooter__text">Zəmanət</span>
                </div>
              </div>
              <div className="detailFooter__buttonWrapper detailFooter__buttonWrapper_forth">
                <div className="detailFooter__button">
                  <div className="">
                   <Wallet />
                  </div>
                  <span className="detailedFooter__text">Konsultasiya</span>
                </div>
              </div>
            </div>
            <div className="setiled__mock"></div>
            <div className="detailedFooter__buttons detailedFooter__buttons_second w-layout-grid product-gallery product-gallery_mb0">
              <div className="cashButton cashButton_credit">
                <div className="cashButton__button cashButton__button_credit">
                  <span>{clickText ? clickText : "Hİssə-hİssə ödə"}</span>
                </div>
                <div onClick={()=>insertToStore(Installement)} className="cashButton__icon cashButton__icon_credit">
                  <BucketIconBlue />
                </div>
              </div>
              <Modal/>
                   
            </div>
          </div>
        </div>
      </div> : <div id="preloader" className="sc-AykKC ceHfpt">
        <div className="sc-AykKH gNkidG">
          <span></span>
        </div>
        <div className="preloader-text">Yüklənir...</div>
      </div> } { ProductDescriptionInfo.length > 5 &&
      <ProductDescription description={decode(ProductDescriptionInfo)} features={decode(ProductFeaturesInfo)} /> }
      <RecentProduct />
      <SocialMediaLanding />undefined
    </>
 
  );
}
