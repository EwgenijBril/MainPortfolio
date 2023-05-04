import './App.css';
import NavMenu from './components/NavMenu';
import AboutMe from './components/AboutMe';
import WelcomeBanner from './components/WelcomeBanner';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavMenu/>
      <WelcomeBanner/>
      <AboutMe/>
      <MySkills/>
      <MyProjects/>
      <Footer/>
    </div>
  );
}

export default App;
