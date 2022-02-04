import './styles/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Movies from './components/Movies';

function App() {
  return (
    <div>
      <Navbar brand="TMDB" />
      <Header title="Milhões de filmes, séries e pessoas para descobrir. Explore já!" />
      <Movies />
      <Movies />
      <Movies />
      <Movies />
    </div>
  );
}

export default App;
