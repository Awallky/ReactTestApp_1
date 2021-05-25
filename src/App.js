import logo from './logo.svg';
import './App.css';


const imgLogo = <img src={logo} className="App-logo" alt="logo" />
const headerText = (
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    React is EZ! But here's some info. about it anyways.
  </a>
);
const helpFulReactLink = (
  <div>
    <div><a href='https://medium.com/walmartglobaltech/how-to-achieve-reusability-with-react-components-81edeb7fb0e0'>Code reuse in React.</a></div>
  </div>
);
//import { Link } from 'react-router-dom'
const headerObject = (
  <header className="App-header">
    {imgLogo}
    {headerText}
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    {helpFulReactLink}
  </header>
);
const companyList = (
  <div class="col">
    <h1>Company</h1>
    <ul>
      <li><a href="https://corporate.thermofisher.com/us/en/index.html">About</a></li>
      <li><a href="https://corporate.thermofisher.com/us/en/index/about.html">Mission</a></li>
      <li><a href='https://corporate.thermofisher.com/us/en/index/about.html'>Brands</a></li>
      <li><a href='https://corporate.thermofisher.com/us/en/index/contact-us.html'>Get in touch</a></li>
    </ul>
  </div>
);
const productsList = (
<div class="col">
        <h1>Products</h1>
        <ul>
          <li>About</li>
          <li>Mission</li>
          <li>Services</li>
          <li>Social</li>
          <li>Get in touch</li>
        </ul>
      </div>
);
const accountsList = (
  <div class="col">
    <h1>Accounts</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
);
const resourcesList = (
  <div class="col">
    <h1>Resources</h1>
    <ul>
      <li>Webmail</li>
      <li>Redeem code</li>
      <li>WHOIS lookup</li>
      <li>Site map</li>
      <li>Web templates</li>
      <li>Email templates</li>
    </ul>
  </div>
);
const supportList = (
  <div class="col">
    <h1>Support</h1>
    <ul>
      <li>Contact us</li>
      <li>Web chat</li>
      <li>Open ticket</li>
    </ul>
  </div>
);
const socialList = (
  <div class="col social">
    <h1>Social</h1>
    <ul>
      <li><a href='https://www.linkedin.com/company/thermo-fisher-scientific'><img width='15px' height='20px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Twitter_logo_initial.svg/742px-Twitter_logo_initial.svg.png'></img></a></li>
      <li><a href='https://www.facebook.com/thermofisher'><img width='20px' height='25px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png'></img></a></li>
      <li><a href='https://www.instagram.com/thermofisherscientific/'><img width='25px' height='25px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png'></img></a></li>
      <li><a href='https://www.youtube.com/user/LifeTechnologiesCorp'><img width='25px' height='25px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/YouTube_social_white_circle_(2017).svg/1024px-YouTube_social_white_circle_(2017).svg.png'></img></a></li>
      <li><a href='https://www.linkedin.com/company/thermo-fisher-scientific'><img width='25px' height='20px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png'></img></a></li>
    </ul>
  </div>
);

const footerObject = (
  <div class="footer">
    <div class="contain">
      {companyList}
      {productsList}
      {accountsList}
      {resourcesList}
      {supportList}
      {socialList}
    <div class="clearfix"></div>
    </div>
  </div>
);

const bodyObject = (
  <body>
    <div class="dummy_page">
      <div>Embedded Video and Responsive Footer Below.</div>
        <iframe width='300px' height="315" src="https://www.youtube.com/embed/TPK6YbIYV9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
    </div>
  </body>
);

function App() {
  return (
    <div className="App">
      {headerObject}
      {bodyObject}
      {footerObject}
    </div>
  );
}

export default App;
