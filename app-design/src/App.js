import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Features from './Components/Features';
import About from './Components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>     
      <Features/>
      <About/>
    </div>
  );
}

export default App;
