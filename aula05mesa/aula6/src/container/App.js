import '../styles/App.css';

import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
import Footer from '../components/Footer';
 
function App() {
  const empresa = {
    nome: "Croissant. company",
    cnpj: "6546545465"
  }
 return (
 <div className="App">
  <h3>Convidado:</h3>
  <ClassComponent nome="Nicolas" estaNaLista={true} />
  <ClassComponent nome="Pedro" estaNaLista={false} />
  <ClassComponent nome="Carolina" estaNaLista={true} />
  <h3>Tarefas: </h3>
  <FunctionComponent nome="Nicolas" tarefa="batata-frita" />
  <FunctionComponent nome="Pedro" tarefa="pizza" />
  <FunctionComponent nome="Carolina" tarefa="bebidas" />
   <Footer empresa={empresa}></Footer>
</div>

 );
}
 
export default App;
