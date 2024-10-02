
import './App.css';
import Header from './common/Header';
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
      {/* <FeaturesSlider /> */}
      <Feedback />
      <Reporting />
      <Platform />
      {/* <Partners />
      <KnowMoreSlider />
      <Newsletter /> */}
    </>
  )
};

export default App;
