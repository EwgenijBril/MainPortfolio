import './App.css';
import NavMenu from './components/NavMenu';
import AboutMe from './components/AboutMe';
import WelcomeBanner from './components/WelcomeBanner';
import MySkills from './components/MySkills';

function App() {
  return (
    <div>
      <NavMenu/>
      <WelcomeBanner/>
      <AboutMe/>
      <MySkills/>
    </div>
  );
}

export default App;
