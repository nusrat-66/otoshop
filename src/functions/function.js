export const dinamicFieldTaker=(dinamicField, attrId)=>{

    const dinamicObj={}
    dinamicField.forEach(element => {
        if(element.attributeId==8){
            dinamicObj.Color=element.value
        }
 
        else if(element.attributeId==11){
            dinamicObj.Size=element.value
        }
        else if(element.attributeId==10020){
            dinamicObj.Discount=element.value
        }
  
        else if(element.attributeId==10047){
            dinamicObj.image2=element.value
        }
        else if(element.attributeId==10048){
            dinamicObj.image3=element.value
        }
        else if(element.attributeId==10049){
            dinamicObj.image4=element.value
        }
    

        else if(element.attributeId==10022){
             dinamicObj.creditId=element.value
        }

        else if(element.attributeId==9){
            dinamicObj.inSale=element.value
        }
        else if(element.attributeId==10){
            dinamicObj.material=element.value
        }
        else if(element.attributeId==10053){
            dinamicObj.brandcountry=element.value
        }




        else if(element.attributeId==10055){
            dinamicObj.type=element.value
        }





        else if(element.attributeId==10056){
            dinamicObj.season=element.value
        }



        else if(element.attributeId==10057){
            dinamicObj.guaranrtyYear=element.value
        }


        else if(element.attributeId==10058){
            dinamicObj.speedindex=element.value
        }

 


        else if(element.attributeId==10060){
            dinamicObj.width=element.value
        }
 

        else if(element.attributeId==10061){
            dinamicObj.height=element.value
        }


        else if(element.attributeId==10062){
            dinamicObj.diametr=element.value
        }
        else if(element.attributeId==10059){
            dinamicObj.weightindex=element.value
        }


        else if(element.attributeId==10064){
            dinamicObj.marka=element.value
        }

        else if(element.attributeId==10063){
            dinamicObj.size=element.value
        }















    });
    return dinamicObj
}