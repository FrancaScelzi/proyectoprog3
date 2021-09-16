// import './App.css';
import SongsContainer from './components/SongsContainer/SongsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/SongsContainer/Search/Search'

function App() {
  return (
    <div className="App">
      <Header/>
      <SongsContainer/>
      <Footer/>
    </div>
  );
}

export default App;
