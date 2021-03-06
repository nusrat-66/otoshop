import axios from "axios";
 
  axios.defaults.baseURL = "https://apis.digimall.az/api";
    


   
 const BucketRelated = {
   getCities: (id) => {
    let endPoint=''
   if(id){
       endPoint=`?parentId=${id}`
   }
 return  axios.get(`Customers/GetRegions`+endPoint,  
    {headers: { 'api-key': "e4246c59-4357-4c5e-a5a9-af4307c4f751"}})
  .then((responseBody=>{
       if(responseBody.status==200){
           return responseBody.data
      } 
  }))
},
 postUserAdress: (data)=>{
       return axios.post(`Customers/NewCustomerAddressForOtoShop`, data, {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
     .then((data)=>{
        return data.data
 
     })
 },

 
 
 getCustomerAddress:(id) =>{
   return axios.get(`/Customers/GetCustomerAddressByCustomerId?customerId=${id}`, { headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10",  'Authorization' : `Bearer ${localStorage.getItem('token')}`,}})
  .then((data)=>{
        return data.data
  })
},
deleteCustomerAddress:(id) =>{
  return axios.delete(`https://apis.digimall.az/api/Customers/DeleteCustomerAddress/${id}`, {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10",  'Authorization' : `Bearer ${localStorage.getItem('token')}`,}})
 .then((data)=>{
       return data.data
 })
},

 CreateNewProforma:(data) =>{
  return axios.post(`https://apis.digimall.az/api/Customers/CreateNewProformaForOtoShop`,data, {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10",  'Authorization' : `Bearer ${localStorage.getItem('token')}`,}})
 .then((data)=>{
       return data.data
 })
},
 
getCreditSettingsById:(id) =>{
  return axios.get(`/Cehizim/GetCreditSettingMonthByCreditSettingId/${id}`, {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10",  'Authorization' : `Bearer ${localStorage.getItem('token')}`,}})
 .then((data)=>{
       return data.data
 })
},
 
getCustomerProducts:(customerId) => {
  return axios.get(`https://apis.digimall.az/api/Customers/GetCustomersRequestReport/${customerId}`, {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10",  'Authorization' : `Bearer ${localStorage.getItem('token')}`,}})
 .then((data)=>{
       return data.data
 })
},

getCustomerAddressForCehizim:(id) =>{
  return axios.get(`/Customers/GetCustomerAddressesByCustomerIdForCehizim?customerId=${id}`, {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10",  'Authorization' : `Bearer ${localStorage.getItem('token')}`,}})
 .then((data)=>{
       return data.data
 })
},

updateAdressStatus:(body) =>{
  return axios.put(`/Customers/UpdateCustomerAddressStatus`,body, {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10",  'Authorization' : `Bearer ${localStorage.getItem('token')}`,}})
 .then((data)=>{
       return data.data
 })
},
 
 }

 
const WishListRelated = {
  getelementById: (id) => {
 return  axios.post(`https://apis.digimall.az/api/Queries/ProductFieldSearchForOtoShop`, {productsId:id, languageId:19},
   {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
 .then((responseBody=>{
      if(responseBody.status==200){
          return responseBody.data
     } 
 }))
}
 }


const ProfilRelated = {
  changePassword: (body) => {
 return  axios.post(`https://identity.digimall.az/api/Password/ResetPasswordByUser`, body,
   {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
 .then((responseBody=>{
      if(responseBody.status==200){
          return responseBody.data
     } 
 }))
},
 loginVerify: (body) => {
  return  axios.post(`https://identity.digimall.az/api/loginWithVerify`, body,
    {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
  .then((responseBody=>{
       if(responseBody.status==200){
           return responseBody.data
      } 
  }))
 },

}




const ProductRelated = {
  advanceSearch: (body) => {
 return  axios.post(`https://apis.digimall.az/api/Queries/OtoShopAdvanceSearch`, body,
   {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
 .then((responseBody=>{
      if(responseBody.status==200){
          return responseBody.data
     } 
 }))
},

getAdvanceSearch: () => {
  return  axios.get(`https://apis.digimall.az/api/OtoShop/GetOtoShopAttributes`,
    {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}}) 
  .then((responseBody=>{
       if(responseBody.status==200){
           return responseBody.data
      } 
  }))
 },

relatedProducts: (body) => {
  return  axios.post(`/Queries/CehizimRelatedProducts`, body,
    {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10", 'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
  .then((responseBody=>{
       if(responseBody.status==200){
           return responseBody.data
      } 
  }))
 },

 getSlider: () => {
  return  axios.get(`https://apis.digimall.az/api/OtoShop/GetSliders`,
    {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
  .then((responseBody=>{
       if(responseBody.status==200){
           return responseBody.data
      } 
  }))
 },

 getCategories: () => {
  return  axios.get(`https://apis.digimall.az/api/OtoShop/GetCategoriesWithCreditSettings`,
    {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}}) 
  .then((responseBody=>{
       if(responseBody.status==200){
           return responseBody.data
      } 
  }))
 },

 getStories: () => {
  return  axios.get(`https://apis.digimall.az/api/OtoShop/GetStories`,
    {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
  .then((responseBody=>{
       if(responseBody.status==200){
           return responseBody.data
      } 
  }))
 }

 }



 const CampaniyaRelated = {
  getCampaign: (id) => {
 return  axios.get(`https://apis.digimall.az/api/Products/GetCampaignItemsByCampaignId?campaignId=${id}`,
   {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
 .then((responseBody=>{
      if(responseBody.status==200){
          return responseBody.data
     } 
 }))
},
getNewest: (id) => {
  return  axios.get(`https://apis.digimall.az/api/Cehizim/GetNewestProductById/${id}`,
    {headers: { 'api-key': "D74AE0D0-6F20-40AA-B4C9-FC138D66EF10"}})
  .then((responseBody=>{
       if(responseBody.status==200){
           return responseBody.data
      } 
  }))
 },
 
}


  
  
const agent = {
    BucketRelated,
    WishListRelated,
    ProfilRelated,
    ProductRelated,
    CampaniyaRelated
   };

export default agent;
 