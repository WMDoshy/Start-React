// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './Home';
import Portfolio from './portfolio/Portfolio';
import About from './About/About';
import Contect from './Contect/Contect';
import Navabar from './Navbar/Navabar';

function App() {
  return (
    <div className="App">
      <Navabar />
     <Home />
     <Portfolio />
     <About />
     <Contect />
    </div>
  );
}

export default App;
