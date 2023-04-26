import './App.css';
import NavMenu from './components/NavMenu';
import AboutMe from './components/AboutMe';
import WelcomeBanner from './WelcomeBanner';

function App() {
  return (
    <div>
      <NavMenu/>
      <WelcomeBanner/>
      <AboutMe/>
    </div>
  );
}

export default App;
