import React, { Component } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { FiLinkedin } from 'react-icons/fi';
import './App.css';
// index.js or App.jsx
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import logo from './assets/logo.svg'; // Use standard import for SVG

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Recommendations from './components/Recommendations/Recommendations'; // Correct import path

class App extends Component {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="App">
        <div className="preloader">
          {isLoading ? (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          ) : (
            <div className="main-container">
              <div className="social-icons-container">
                <a href="https://github.com/nsurya-0698" target="_blank" rel="noopener noreferrer">
                  <VscGithubAlt className="social-icons git" />
                </a>
                <a href="https://www.linkedin.com/in/surya-teja-nammi/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className="social-icons linkedin" />
                </a>
                <span className="v-line"></span>
              </div>
              <div className="content-container">
                <Header />
                <Main />
                <About />
                <Experience />
                <Recommendations />
                <Contact />
                <Footer />
              </div>
              <div className="mail-container">
                <a className="mail-anchor" href="mailto:tejanammim1@gmail.com">
                  <p className="mail">tejanammim1@gmail.com</p>
                </a>
                <span className="v-line"></span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
