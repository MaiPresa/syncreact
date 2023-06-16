import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import Router from './config/Router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <Footer/>

    </div>
  );
}

export default App;
