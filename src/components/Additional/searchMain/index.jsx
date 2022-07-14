import React, { useState, useEffect } from "react";
import { Reload } from "../../../assets/images/svg/svg";
import { Link } from "react-router-dom";
import agent from '../../../api/agent';
import Popup from "../popUp/popup";
function Index() {

  const [typeOfSearch, setTypeOfSearch] = useState(true);

  const [widthOptions, setWidthOptions] = useState([])
  const [heightOptions, setheightOptions] = useState([])
  const [diameterOptions, setdiameterOptions] = useState([])
  const [typeOptions, settypeOptions] = useState([])
  const [seasonOptions, setseasonOptions] = useState([])
  
  useEffect(() => {
    const getSearchData = async () => {
      const searchData = await agent.ProductRelated.getAdvanceSearch();
      searchData.forEach((item) => {
        if(item.attId === 10060) {
          setWidthOptions(item.attOptions)
        } else if(item.attId === 10061) {
          setheightOptions(item.attOptions)
        } else if(item.attId === 10062) {
          setdiameterOptions(item.attOptions)
        } else if(item.attId === 10055) {
          settypeOptions(item.attOptions)
        } else if(item.attId === 10056) {
          setseasonOptions(item.attOptions)
        }
      })
    };
    getSearchData();

  }, []);

  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [diameter, setDiameter] = useState('')
  const [type, setType] = useState('')
  const [season, setSeason] = useState('')



  return (
    <div className="dv-wrapper">
      <div className="search">
        <div className="search__header">
          <button
            onClick={() => setTypeOfSearch(true)}
            className={
              typeOfSearch
                ? "search__switcher search__switcher_active"
                : "search__switcher"
            }
          >
            Təkərə görə axtar
          </button>
          {/* <button
            onClick={() => setTypeOfSearch(false)}
            className={
              !typeOfSearch
                ? "search__switcher search__switcher_active"
                : "search__switcher"
            }
          >
            Avtomobilə görə axtar
          </button> */}
        </div>

        {typeOfSearch && (
          <form className="search__footer_first">
                  <div className="search__inputs">
                    <select value={width} className="search__select" name="" id="" onChange={(e) => setWidth(e.target.value)}>
                      <option value="">En</option>
                      {
                        widthOptions.map((item,index) => (
                          <option key={index}  value={item}>{item}</option>
                        ))
                      }
                    </select>
                    <select value={height} className="search__select" name="" id="" onChange={(e) => setHeight(e.target.value)}>
                      <option value="">Hündürlük</option>
                      {
                        heightOptions.map((item,index) => (
                          <option key={index}  value={item}>{item}</option>
                        ))
                      }
                    </select>
                    <select value={diameter} className="search__select" name="" id="" onChange={(e) => setDiameter(e.target.value)}>
                      <option value="">Diametr</option>
                      {
                        diameterOptions.map((item,index) => (
                          <option key={index}  value={item}>{item}</option>
                        ))
                      }
                    </select>
                  </div>

                  <div className="search__inputs">
                    <select value={type} className="search__select" name="" id="" onChange={(e) => setType(e.target.value)}>
                      <option value="">Növ</option>
                      {
                        typeOptions.map((item,index) => (
                          <option key={index}  value={item}>{item}</option>
                        ))
                      }
                    </select>

                    <select value={season} className="search__select" name="" id="" onChange={(e) => setSeason(e.target.value)}>
                      <option value="">Mövsüm</option>
                      {
                        seasonOptions.map((item,index) => (
                          <option key={index}  value={item}>{item}</option>
                        ))
                      }
                    </select>

                    <div className="search__buttons">
                      <Link to={"/axtarish/"+`${width+'-'+height+'-'+diameter+'-'+type+'-'+season}`} className="banner__button search__button-search">
                        Axtar
                      </Link>
                      <button  type="reset"  className="search__button" >
                      <Reload />
                      </button>
                    </div>
                  </div>
          </form>
        )}

        {/* {!typeOfSearch && (
          <form className="search__footer_first">
            <div className="search__inputs">
              <select
                className="search__select search__select_half"
                name=""
                id=""
              >
                <option value="">Marka</option>
                <option value="10">Mercedes</option>
                <option value="20">Opel</option>
              </select>
              <select
                className="search__select search__select_half"
                name=""
                id=""
              >
                <option value="">Model</option>
                <option value="10">C 200</option>
                <option value="20">E 200</option> 
              </select>
            </div>

            <div className="search__inputs">
              <select className="search__select" name="" id="">
                <option value="">İl</option>
                <option value="10">2021</option>
                <option value="20">2019</option>
              </select>

              <select className="search__select" name="" id="">
                <option value="">Mühərrik</option>
                <option value="10">250</option>
                <option value="20">200</option>
              </select>

              <div className="search__buttons">
                <button className="banner__button search__button-search">
                  Axtar
                </button>
                <button type="reset" className="search__button">
                  <Reload />
                </button>
              </div>
            </div>
          </form>
        )} */}
      </div>
    </div>
  );
}

export default Index;
