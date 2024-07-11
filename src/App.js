import logo from './logo.svg';
import './App.css';
import HeadlineSection from './components/HeadlineSection';
import NavigationSection from './components/NavigationSection';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <div className="App w-full h-full">
      <HeadlineSection />
      <NavigationSection />
    </div>
  );
}

export default App;
