import React, { useState } from 'react';
import { publicLinks } from '../../App';
import FbLogo from '../../assets/images/facebook.svg';
import InstaLogo from '../../assets/images/instagram.svg';
import TiktokLogo from '../../assets/images/tiktok.svg';
import axios from 'axios';
import logo from "../../assets/images/oto/otoshop_logo.png"
import { Link } from 'react-router-dom';

export default function Footer() {
    const [isEmail, setisEmail] = useState();
    function emailSub(e) {
        e.preventDefault();
        axios({
            method: 'post',
            baseURL: 'https://apis.digimall.az/api/Cehizim/NewSubscription',
            headers: {
                'Content-Type' : 'application/json',
                'api-key' : '620C471E-05CC-4D90-9817-B7A3EED57E1B'
            },
            data: {
                email: document.querySelector('input[name="emailSub"]').value,
            }
        }).then(function (response) {
            setisEmail(true);
        });
    };
        return(
            <div className="footer wf-section">
                <div className="dv-wrapper-2">
       
                    <div className="footer-details">
                        <div className="w-layout-grid foot-grid">
                            <div id="w-node-_8b3e74bb-ebeb-6eb5-61ff-2297421ef3ac-421ef398" className="contact-details">
                                <div className="footer-logo"><img src={logo} loading="lazy" alt="" className="cehizim-logo" /></div>
                                <div className="contact-links">
                                    <div className="location">ünvan</div>
                                    <div className="phone-link">
                                        <img src="https://assets.website-files.com/620a985e7541fc8c1ca5ea83/620be6a7a84d324595621ace_phone-icon.svg" loading="lazy" alt="" className="call-icon wh-24 gap-r-12" />
                                        <a href={publicLinks.login} className="text-base">+994 (55) 213 36 13</a>
                                    </div>
                                    <div className="email-link">
                                        <img src="https://assets.website-files.com/620a985e7541fc8c1ca5ea83/620be6a7a84d3270fc621acf_mail-icon.svg" loading="lazy" alt="" className="email-icon wh-24 gap-r-12" />
                                        <a href={publicLinks.login} className="text-base">info@otoshop.az</a>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_8b3e74bb-ebeb-6eb5-61ff-2297421ef3ba-421ef398" className="company">
                                <div id="w-node-_8b3e74bb-ebeb-6eb5-61ff-2297421ef3bb-421ef398" className="company-head">ŞİRKƏT</div>
                                <div className="w-layout-grid link-grid">
                                    <a href={publicLinks.about} className="text-base">Haqqımızda</a>
                                    <a href={publicLinks.blog} className="text-base">Bloq</a>
                                </div>
                            </div>
                            <div id="w-node-_8b3e74bb-ebeb-6eb5-61ff-2297421ef3c6-421ef398" className="for-customers">
                                <div id="w-node-_8b3e74bb-ebeb-6eb5-61ff-2297421ef3c7-421ef398" className="customers-heading">Müştərİ üçün</div>
                                <div className="w-layout-grid link-grid">
                                    <a href="/kredit-ve-geri-qaytarma" className="text-base">Kredit &amp; geri qaytarma</a>
                                    <a href="/faq" className="text-base">FAQ</a>
                                    <a href="/kredit-ve-geri-qaytarma" className="text-base">Zəmanət</a>
                                </div>
                            </div>
                            <div id="w-node-_8b3e74bb-ebeb-6eb5-61ff-2297421ef3d0-421ef398" className="links">
                                <div id="w-node-_8b3e74bb-ebeb-6eb5-61ff-2297421ef3d1-421ef398" className="links-heading">Keçİdlər</div>
                                <div id="w-node-_8b3e74bb-ebeb-6eb5-61ff-2297421ef3d3-421ef398" className="w-layout-grid link-grid">
                                    <Link to="/razilasma" className="text-base">İstifadəçi razılaşması</Link><Link to={'/mexfilik'} className="text-base">Məxfilik siyasəti</Link><Link to={'/sertler'} className="text-base">Şərtlər &amp; qaydalar<br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="fn-print">
                            <div className="text-base">©2022 Otoshop.az</div>
                            <div className="social__links">
                                <a href="https://www.instagram.com/cehizimaz/" target="_blank" rel="noopener noreferrer" className="social__link gap-r-24 w-inline-block">
                                    <div className="html-embed w-embed">
                                        <img src={InstaLogo} alt="Instagram Cehizim"/>
                                    </div>
                                </a>
                                <a href="https://www.facebook.com/cehizimazerbaijan" target="_blank" rel="noopener noreferrer" className="social__link gap-r-24 w-inline-block">
                                    <div className="html-embed w-embed">
                                        <img src={FbLogo} alt="Facebook Cehizim"/>
                                    </div>
                                </a>
                                <a href="https://www.tiktok.com/@cehizimaz" target="_blank" rel="noopener noreferrer" className="social__link w-inline-block">
                                    <div className="html-embed w-embed">
                                        <img src={TiktokLogo} alt="Tiktok Cehizim" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
}