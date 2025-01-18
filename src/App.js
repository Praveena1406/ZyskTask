import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SocialProofSection from './SocialProofSection/SocialProofSection';
import Features from './Features/Features';
import Testimonials from './Testimonials/Testimonials';
import FAQPage from './FAQ/FAQPage';
import BlogSection from './BlogSection/BlogSection';
import Footer from './Footer/Footer';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <SocialProofSection />
      <Features /> 
      <Testimonials />
      <FAQPage />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
