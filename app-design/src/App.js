import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Features from './Components/Features';
import About from './Components/About';
import Usage from './Components/Usage';
import Review from './Components/Reviews';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>     
      <Features/>
      <About/>
      <Usage/>
      <Review/>
    </div>
  );
}

export default App;
