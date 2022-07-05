import React, { useState } from "react";
import { Reload } from "../../../assets/images/svg/svg";
import Popup from "../popUp/popup";
function Index() {
  const [typeOfSearch, setTypeOfSearch] = useState(true);

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
          <button
            onClick={() => setTypeOfSearch(false)}
            className={
              !typeOfSearch
                ? "search__switcher search__switcher_active"
                : "search__switcher"
            }
          >
            Avtomobilə görə axtar
          </button>
        </div>

        {typeOfSearch && (
          <form className="search__footer_first">
            <div className="search__inputs">
              <select className="search__select" name="" id="">
                <option value="">En</option>
                <option value="10">100mm</option>
                <option value="20">200mm</option>
              </select>
              <select className="search__select" name="" id="">
                <option value="">Hündürlük</option>
                <option value="10">500mm</option>
                <option value="20">700mm</option>
              </select>
              <select className="search__select" name="" id="">
                <option value="">Diametr</option>
                <option value="10">200mm</option>
                <option value="20">150mm</option>
              </select>
            </div>

            <div className="search__inputs">
              <select className="search__select" name="" id="">
                <option value="">növ</option>
                <option value="10">Təzə</option>
                <option value="20">İşlənmiş</option>
              </select>

              <select className="search__select" name="" id="">
                <option value="">Mövsüm</option>
                <option value="10">Yaz</option>
                <option value="20">Payız</option>
              </select>

              <div className="search__buttons">
                <button className="banner__button search__button-search">
                  Axtar
                </button>
                <button type="reset"  className="search__button" >
                <Reload />
                </button>
              </div>
            </div>
          </form>
        )}

        {!typeOfSearch && (
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
        )}
      </div>
    </div>
  );
}

export default Index;
