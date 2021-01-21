import avatar from "./avatar.jpg";
import styled from "styled-components";
import "./App.css";
import { useState } from "react";

const Header = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
  color: var(--txt-color);
  h1 {
    font-size: 1.2rem;
  }
  small {
    font-size: 0.9rem;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }
  i {
    letter-spacing: 1px;
  }
`;

const Main = styled.main`
  text-align: left;
  padding: 0 20px;
  font-size: 1.1rem;
  display: flex;
  column-gap: 20px;
  color: var(--txt-color);
  ul {
    padding-inline-start: 20px;
    margin-block-start: 0.5em;
    margin-block-end: 0;
    li {
      padding: 5px 0;
      text-transform: inherit;
      font-size: 0.9rem;
      line-height: 23px;
    }
  }
  h2 {
    font-size: 1.2rem;
    margin: 10px 0px;
  }
  small {
    letter-spacing: 0.8px;
    font-style: italic;
    color: var(--txt-quote);
    font-size: 0.8rem;
  }
  section {
    flex: 1;
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
const Footer = styled.footer`
  padding: 10px 0;
  text-align: center;
  i {
    letter-spacing: 1px;
    font-size: 0.9rem;
    color: #ddd;
  }
`;
const Avatar = styled.div`
  width: 130px;
  height: 130px;
  border: 5px solid #fff2;
  border-radius: 50%;
  margin: 0 auto;

  box-shadow: 0.3px 0.3px 16px #0002;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Box = styled.div`
  padding: 20px 15px;
  background-color: var(--bg-overlay);
  color: var(--txt-color);
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0.3px 0.3px 24px #0001;
  .title {
    text-align: center;
    margin: 5px 0;
    letter-spacing: 1px;
  }
  #quote {
    text-align: center;
    display: inherit;
    font-size: 0.8rem;
    padding: 10px;
    color: var(--txt-color);
    background-color: var(--bg-overlay);
    border-radius: 3px;
    margin: 20px;
  }

  .social {
    list-style: none;
    display: flex;
    column-gap: 15px;
    svg {
      width: 30px;
      height: 30px;
      fill: var(--txt-color);
    }
  }
`;

const SwitchLight = styled.ul`
  padding-inline-start: 0px;
  list-style: none;
  display: flex;
  margin: 10px 20px;
  padding: 10px;
  border-radius: 10px;
  li {
    background-color: var(--bg-overlay);
    padding: 5px 10px 3px;
    cursor: pointer;
    border-radius: 24px;
    letter-spacing: 1px;
    font-size: 0.9em;
    box-shadow: 0.3px 0.3px 24px #0001;
  }
  span {
    padding: 6px;
    position: relative;
    top: -3px;
    font-size: 0.8rem;
  }
  svg {
    fill: var(--btn-light);
  }
`;

function App() {
  const [brightness, setBrightness] = useState(true);

  return (
    <div className={`App ${!brightness ? "high" : ""}`}>
      <SwitchLight>
        {brightness ? (
          <li onClick={() => setBrightness(!brightness)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-brightness-high-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
            <span>Bật đèn</span>
          </li>
        ) : (
          <li onClick={() => setBrightness(!brightness)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-brightness-high"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>

            <span>Tắt đèn</span>
          </li>
        )}
      </SwitchLight>
      <Header>
        <Avatar>
          <img src={avatar} alt="Phan Trọng Đại" title="Phan Trọng Đại" />
        </Avatar>
        <h1>PHAN TRỌNG ĐẠI</h1>
        <small>Developer - Experience 4 years </small>
        <i>Php - Javascript - Sql - NoSql</i>
      </Header>
      <Main>
        <section>
          <Box>
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
          </Box>
          <Box>
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
          </Box>
          <Box>
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
          </Box>
          <Box>
            <h2>#Experience</h2>
            <small>My working history</small>
            <ul>
              <li>2016 - Freelancer Group </li>
              <li>2018 - Mid FGC Techlution</li>
              <li>2020 - Redsand</li>
            </ul>
          </Box>
        </section>
        <section>
          <Box>
            <h3 className="title">#Information</h3>
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
                <a href="https://github.com/jack-rs" title="Redirect to github">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/zg.zogiv" title="Redirect to facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
            </ul>
            <small id="quote">
              <i>Everything is simple when thinking is simple</i>
            </small>
          </Box>
        </section>
      </Main>
      <Footer>
        <i>Make by PhanDai</i>
      </Footer>
    </div>
  );
}

export default App;
