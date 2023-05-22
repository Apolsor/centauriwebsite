import logo from "./logo.png";
import "./App.css";

import i1 from "./images/1.jpg"
import i2 from "./images/2.jpg"
import i3 from "./images/3.jpg"
import i4 from "./images/4.jpg";

function App() {
  return (
    <div className="App">

      <nav className="App-nav">
        <div className="App-nav-left">
          <img src={logo} className="App-nav-logo" alt="logo" />
          <h1>Centauri</h1>
        </div>

        <div className="App-nav-right">
          <a href="https://discord.gg/WBSV5Za5Tr">
            <button className="App-nav-button">Join Us On Discord</button>
          </a>
        </div>
      </nav>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          COMPETE TO WIN 200 USD <br></br>
          <span style={{ opacity: ".5" }}>
            Send <strong>253</strong> images to earn first place!
          </span>
        </h1>

        <div className="App-header-div" />

        <div className="App-header-images">
          <img src={i2} />
          <img src={i4} />
          <img src={i3} />
          <img src={i1} />
        </div>

        <div className="App-header-faq">
          <div className="App-header-faq-container">
            <h4>How Do I enter?</h4>
            <p>
              The goal is to send as many detailed, close-up pictures of your
              fingerprints that you possibly can. You can either send it to me
              on Insta{" "}
              <span style={{ fontWeight: 600 }}>(@CentauriWallet)</span> or
              Discord <span style={{ fontWeight: 600 }}>(#Apolsor7018)</span>.
              Sounds easy, right? Whoever sends the most wins!
            </p>
          </div>
          <div className="App-header-faq-container">
            <h4>What Will This Be Used For?</h4>
            <p>
              The reason why I'm paying out my life savings (not really lol) is
              the need for a TON of data to train some neural networks. I plan
              on using the data to generate "new" fingerprints so people can use
              them as an ethical way to train their AIs.{" "}
            </p>
          </div>
          <div className="App-header-faq-container">
            <h4>Will My Data Be Secure?</h4>
            <p>
              Understanding the sensitivity of biometric information, I will
              never under any circumstance use it other than for training
              purposes, nor share it with any third parties. You may request
              that your data is deleted at any time.
            </p>
          </div>
        </div>
      </header>
      
      <footer className="App-footer">
        <div className="App-footer-content">
          <h3>
            I am Apolsor, I love creating software and have been programming for
            the last few years.
          </h3>
          <h3>
            Questions? Concerns? <br />
            Contact me at: centauri.wallet@gmail.com (I won't bite) <br />
            <br />
            Advertising this site is expensive, if you'd like to help me out please share this website to a friend :)
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
