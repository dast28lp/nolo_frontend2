import logo from './logo.svg';
// import './App.css';
// import './Style.css';
import Navbar from './components/navbar/Navbar';
import Slider from './components/Slider/Slider';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
