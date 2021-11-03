import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const empresa = {
    nome: "Croissant. company",
    cnpj: "6546545465"
  }
  return (
    <div className="App">
      <Header />
      <Banner>Croissant</Banner>
      <Footer empresa={empresa}></Footer>
    </div>
  );
}

export default App;