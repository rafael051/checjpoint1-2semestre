import './App.css'; // Estilos globais
import Footer from './components/Footer';
import GameBanner from './components/GameBanner';
import GameDescription from './components/GameDescription';
import Header from './components/Header';
import UserReviews from './components/UserReviews';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <GameBanner />
        <GameDescription />
        <UserReviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
