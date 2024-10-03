
import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import BackTop from './components/BackTop';
import FeaturesSlider from './components/FeaturesSlider';
import Feedback from './components/Feedback';
import Hero from './components/Hero';
import KnowMoreSlider from './components/KnowMoreSlider';
import Newsletter from './components/Newsletter';
import Partners from './components/Partners';
import Platform from './components/Platform';
import Reporting from './components/Reporting';
import Workout from './components/Workout';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Workout />
      <FeaturesSlider />
      <Feedback />
      <Reporting />
      <Platform />
      <Partners />
      <KnowMoreSlider />
      <Newsletter />
      <Footer />
      <BackTop />
    </>
  )
};

export default App;
