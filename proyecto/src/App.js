// import './App.css';
import SongsContainer from './components/SongsContainer/SongsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Carrousel from './components/Carrousel/Carrousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carrousel/>
      <SongsContainer/>
      <Footer/>
    </div>
  );
}

export default App;
