import React, {useState} from 'react'
import AddIcon from '../../../assets/images/add.svg';

function DropdownList({category, filterCategory, setFilterCategory}) {

const [dropDownOn, setDropDownOn]=useState(false)

const dropClick=()=>{
    setDropDownOn(!dropDownOn)
}
const filterCat=()=>{
    setFilterCategory({type:true, payload:category.id})
}

const filterSub=(id)=>{
    setFilterCategory({type:false, payload:id})
}

const categoryClass=filterCategory.payload==category.id?"fltr-item-h fltr-item-h_sp fltr-item-h_hover":"fltr-item-h fltr-item-h_sp"
const subCategoryClass= (id)=> filterCategory.payload==id?"pointer fltr-dp-list text-sm w-dropdown-link fltr-item-h_hover":"pointer fltr-dp-list text-sm w-dropdown-link"

const plusIconClass=dropDownOn?'SubCategoryExpanded':""
const subClass=dropDownOn?'fltr-drpdown fltr-drpdown_block w-dropdown-list':"fltr-drpdown w-dropdown-list"   
  return (
    <li className="fltr-item">
     <div data-hover="false" data-delay="{0}" className="fltr-drp w-dropdown">
        <div className="fltr-toggle w-dropdown-toggle">
            <div onClick={filterCat} className={categoryClass}>{category.name}</div>
             <div onClick={dropClick} className={plusIconClass}>
             <svg className="add-icon wh-24 " width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.43848 12.5469H18.8132" stroke="#383838" stroke-linecap="round" strokeLinejoin="round"/>
<path d="M12.626 18.5469V6.54688" stroke="#383838" stroke-linecap="round" strokeLinejoin="round"/>
</svg>
            </div>
          </div>
        <nav className={subClass}>
    {category.subCategories.map((sub)=><a key={sub.id} onClick={()=>filterSub(sub.id)} className={subCategoryClass(sub.id)}>{sub.name}</a>)}
         </nav>
    </div>
</li>
  )
}

export default DropdownList