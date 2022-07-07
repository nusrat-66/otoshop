import React, {useState, useEffect} from 'react'
import agent from "../../api/agent"
 
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

 
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


 
 
function  UnvanForm({element, products, unvanForm, unvanIncrease, customerAdress, setProducts, setUnvanForm, unvan, setUnvan}) {

    const [cities, setCities]=useState([])
    const [regions, setRegions]=useState([])
    const [lasetUnvan, setLastUnvan]=useState(false)
    const [adresSelected, setAdresSelected]=useState(false)
    const  selectRef=React.useRef()
    
 
     useEffect(async () => {
        const cities = await agent.BucketRelated.getCities()
        const regions = await agent.BucketRelated.getCities(cities[0].id)
         setCities(cities)
        setRegions(regions)
          }, [])

         const onCityChange= async (e)=> {
            const regions = await agent.BucketRelated.getCities(e.target.value)
             setRegions(regions)
            unvanFormChangeFunc(e)
            unvanFormChangeFunc({ target:{
              value:"",
              name:"rayon;"+(element-1)
            }})
         }
   
   const resetCustomerAddress=()=>{
  unvanFormChangeFunc({
    target:{
      value:null,
      name:"addressId;"+(element-1)
    }
  })
  



  unvanForm[element-1].addressId=null
    }
      const unvanFormChangeFunc=(e, select)=> {
      const rawName=e.target.name.split(";")
      const formIndex=+rawName[1]
      const name=rawName[0]
      const value=e.target.value
      const dumUnvanForm=unvanForm
      dumUnvanForm[name]=value
      setUnvanForm({...dumUnvanForm})
if(select){
  const dumProducts=products.map((product)=> {
            if(product.isUnvan==element){
             product.isUnvan=null
          }
         if(product.id==value){
          product.isUnvan=element
          return product
         }
         else{
           return product
         }
      })
       setProducts(dumProducts)
       }
}
 
 
const closeFunction=()=>{
    const dumProducts= products.map((product)=> {
  if(product.isUnvan==element){
   product.isUnvan=null
}
  return product
 })
 let mockUnvanForm=unvanForm
mockUnvanForm.splice(element-1, 1)
 setUnvanForm([...mockUnvanForm])
setProducts(dumProducts)



  const mockArr=unvan
  mockArr.pop()
    setUnvan([...mockArr])
 }
 
 useEffect(() => {
 setAdresSelected(!unvanForm.addressId)
 }, [!unvanForm.addressId])
 

 
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
       typeof value === 'string' ? value.split(',') : value,
    );
 
      const rawName=event.target.name.split(";")
      const formIndex=+rawName[1]
      const name=rawName[0]
      const inputValue=event.target.value
      const dumUnvanForm=unvanForm
      dumUnvanForm[formIndex][name]=inputValue
      setUnvanForm([...dumUnvanForm])
   const dumProducts =products.map((product)=>{
            if(product.isUnvan==element){
             product.isUnvan=null
          }
         if(inputValue.includes(product.id)){
          product.isUnvan=element
          return product
         }
         else{
           return product
         }
      })
       setProducts(dumProducts)
 
    };
return (
    <div key={element} className="shipping">
     <div className="block-header">
      <h4 className="checkout-heading">Çatdırılma ünvanı </h4>
      <div className='unvan_texts'>
      <div className="required">* Tələb olunur </div>
 
      </div>
     </div>
     <fieldset className="w-commerce-commercecheckoutblockcontent block-content">
       <div className="unvanForm">
      {customerAdress.length>0 && <select onChange={(e)=>unvanFormChangeFunc(e)} className="w-commerce-commercecheckoutshippingcountryselector city-lb" name={"addressId"} id=""> 
      { customerAdress.map((customerAddress)=> <option key={customerAddress.id} value={customerAddress.id}>{customerAddress.address}</option>) }
       </select>}
   {!adresSelected && <button className='btn__sp' onClick={resetCustomerAddress}>Adres elave et</button>}
       </div>
        <> 
       <div className="w-commerce-commercecheckoutrow block-row">
   {adresSelected && <div className="w-commerce-commercecheckoutcolumn block-column">
          <label className="w-commerce-commercecheckoutlabel cs-label">Şəhər *</label>
          <select onChange={onCityChange} name={"seher"} className="w-commerce-commercecheckoutshippingcountryselector city-lb">
               {cities.map((city)=> <option key={city.id} value={city.id}>{city.name}</option>)}
         </select>
        </div>}

     <div className="w-commerce-commercecheckoutcolumn block-column gap-b-16">
     <label className="w-commerce-commercecheckoutlabel cs-label">Çatdırılma tarixi *</label>
          <input value={unvanForm['tarix']} onChange={(e)=>unvanFormChangeFunc(e)} type="datetime-local" name={"tarix"} required className="w-commerce-commercecheckoutshippingcity dist-lb" />
          </div>
       </div>
      
{adresSelected && <><div className="w-commerce-commercecheckoutrow block-row">
        <div className="w-commerce-commercecheckoutcolumn block-column">
          <label className="w-commerce-commercecheckoutlabel cs-label">Çatdırılma ünvanı *</label>
          <input value={unvanForm['unvan']} onChange={(e)=>unvanFormChangeFunc(e)} type="text" name={"unvan"} required className="w-commerce-commercecheckoutshippingcity loc-lb" />
        </div>
        <div className="w-commerce-commercecheckoutcolumn block-column gap-b-16">
         
          { regions.length>0 && <>
          <label className="w-commerce-commercecheckoutlabel cs-label">Rayon *</label>
          <select onChange={unvanFormChangeFunc} name={"rayon"} className="w-commerce-commercecheckoutshippingcountryselector city-lb">
               {regions.map((city)=> <option key={city.id} value={city.id}>{city.name}</option>) }
         </select>
         </>
         }
        </div>
      </div>
      <div className="w-commerce-commercecheckoutrow block-row">
        <div className="w-commerce-commercecheckoutcolumn block-column">
          <label className="w-commerce-commercecheckoutlabel cs-label import">Əlavə qeydlər</label>
          <input value={unvanForm['elaveMelumat']} onChange={(e)=>unvanFormChangeFunc(e)} type="text" name={"elaveMelumat"} required className="w-commerce-commercecheckoutshippingcity notes-lb" />
        </div>
      </div>
      </>
      }
      </>
 
    </fieldset>
  </div>
  )
}

export default UnvanForm;