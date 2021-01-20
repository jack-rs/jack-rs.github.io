import avatar from "./avatar.jpg";
import styled from "styled-components";
import "./App.css";

const Header = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
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
  ul {
    padding-inline-start: 20px;

    margin-block-start: 0.5em;
    margin-block-end: 0;
    li {
      padding: 5px 0;
      text-transform: capitalize;
      font-size: 0.9rem;
      line-height: 23px;
    }
  }
  h2 {
    font-size: 1.4rem;
    margin: 5px 0px;
  }
  small {
    letter-spacing: 0.8px;
    font-style: italic;
    color: #eee;
  }
  section {
    flex: 1;
  }
  @media(max-width: 800px) {
    flex-direction: column-reverse
  }
`;

const Avatar = styled.div`
  width: 130px;
  height: 130px;
  border: 5px solid #fff2;
  border-radius: 50%;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const Box = styled.div`
  padding: 10px 15px;
  background-color: #fff1;
  margin-bottom: 20px;
  border-radius: 5px;
  .title {
    text-align: center;
    margin: 5px 0;
    letter-spacing: 1px;
  }
`;

function App() {
  return (
    <div className="App">
      <Header>
        <Avatar>
          <img src={avatar} alt="Phan Trọng Đại" title="Phan Trọng Đại" />
        </Avatar>
        <h1>PHAN TRỌNG ĐẠI</h1>
        <small>Developer - Experience 4 years </small>
        <i>Php - Javascript - SQL - NOSQL</i>
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
              <li>html / css / jquery / javascript</li>
              <li>bootstrap / scss / gulp</li>
              <li>github /gitlab / gitaction</li>
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
              <li>Address : Chung cư cienco4 - 61 Nguyễn Trường Tộ - Tp.Vinh</li>
              <li>Email : Master.zogiv@gmail.com</li>
              <li>Phone : 0942.389.597</li>
            </ul>
          </Box>
        </section>
      </Main>
    </div>
  );
}

export default App;
