import './component/css/App.css';
import AppAppBar from './component/appBar';
import BlogSection from './component/BlogSection';
import Footer from './component/Footer';
import Hero from './component/HeroSection';
import LetsConnectForm from './component/LetsConnectForm';
import WhatWeOfferSection from './component/WhatWeOffer';

function App() {
  return (
    <div className="App">
      <AppAppBar />
      <Hero />
      <WhatWeOfferSection />
      <BlogSection />
      <LetsConnectForm />
      <hr style={{ background: "rgba(255, 255, 255, 0.5)" }}></hr>
      <Footer />
    </div >
  );
}

export default App;