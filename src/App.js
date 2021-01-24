import avatar from "./avatar.jpg";

import "./App.css";
import "./styles/icon/css/all.min.css";
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as JK from "./styles/style";

function App() {
  const [brightness, setBrightness] = useState(true);

  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  // translate

  const changeLang = (e) => {
    let lang = e.target.value;
    // set language
    setLanguage(lang);
    // change languae
    i18n.changeLanguage(lang);
  };

  return (
    <div className={`App ${!brightness ? "high" : ""}`}>
      <JK.HeaderWrap>
        <JK.HeaderProfile>
          <JK.SwLight>
            {brightness ? (
              <li onClick={() => setBrightness(!brightness)}>
                <JK.IconLight />
                <span>Bật đèn</span>
              </li>
            ) : (
              <li onClick={() => setBrightness(!brightness)}>
                <JK.IconDark />
                <span>Tắt đèn</span>
              </li>
            )}
          </JK.SwLight>

          <JK.SwLanguage>
            <i className="fas fa-language"></i>
            <select onChange={(e) => changeLang(e)} value={language}>
              <option value="vi">Tiếng Việt </option>
              <option value="en">Tiếng Anh </option>
            </select>
          </JK.SwLanguage>
        </JK.HeaderProfile>

        <JK.Header>
          <JK.Avatar>
            <img src={avatar} alt="Phan Trọng Đại" title="Phan Trọng Đại" />
          </JK.Avatar>
          <h1>{t("name")}</h1>
          <small>Developer - Experience 4 years </small>
          <i>Php - Javascript - Sql - NoSql</i>
        </JK.Header>
      </JK.HeaderWrap>

      <JK.Main>
        <section>
          <JK.Box>
            <h2>#Font End</h2>
            <small>
              I use bem rule with normal fontend project, styled-components with
              react project
            </small>
            <ul>
              <li>Html / css / jquery / javascript</li>
              <li>Bootstrap / scss / gulp</li>
              <li>Github / Gitlab / Git action</li>
              <li>React / Redux / Config Webpack</li>
            </ul>
          </JK.Box>
          <JK.Box>
            <h2>#Back End</h2>
            <small>
              I like speed and real time, for the past 1 year I have mainly been
              working with nodejs express frameworks
            </small>
            <ul>
              <li>CMS Wordpress</li>
              <li>Framework Laravel</li>
              <li>FrameWork Express</li>
            </ul>
          </JK.Box>
          <JK.Box>
            <h2>#Server</h2>
            <small>
              Recently I switched to docker, no longer installing a single
              server
            </small>
            <ul>
              <li>Server Apache</li>
              <li>Server Nginx</li>
              <li>Docker</li>
            </ul>
          </JK.Box>
          <JK.Box>
            <h2>#Experience</h2>
            <small>My working history</small>
            <ul>
              <li>2016 - Freelancer Group </li>
              <li>2018 - Mid FGC Techlution</li>
              <li>2020 - Redsand</li>
            </ul>
          </JK.Box>
        </section>
        <section>
          <JK.Box>
            <h3 className="title">#{t("blockInfo")}</h3>
            <ul>
              <li>Date of birth : 01/02/1993</li>
              <li>
                Address : Chung cư cienco4 - 61 Nguyễn Trường Tộ - Tp.Vinh
              </li>
              <li>Email : Master.zogiv@gmail.com</li>
              <li>Phone : 0942.389.597</li>
              <li>Connect with me :</li>
            </ul>
            <ul className="social">
              <li>
                <a href="https://github.com/jack-rs" title="Github">
                  <JK.IconGithub />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/zg.zogiv" title="Facebook">
                  <JK.IconFacebook />
                </a>
              </li>
            </ul>
            <small id="quote">
              <i>Everything is simple when thinking is simple</i>
            </small>
          </JK.Box>
        </section>
      </JK.Main>
      <JK.Footer>
        <i>Make by PhanDai</i>
      </JK.Footer>
    </div>
  );
}

export default App;
