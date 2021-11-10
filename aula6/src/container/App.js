import '../styles/App.css';
import { Fragment } from 'react';

import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
 
function App() {

  let convidados = [
    {
      id: 0,
      nome: "Carol",
      estaNaLista: true,
      tarefa: "brigadeiro"
    },
    {
      id: 5,
      nome: "Clarissa",
      estaNaLista: true,
      tarefa: "bolinho de queijo"
    },
    {
      id: 12,
    nome: "Helena",
    estaNaLista: false,
    tarefa: "Coca-cola"
    }
  ];

 return (
 <div className="App">
     <h3>Convidado:</h3>
   {
     convidados.map((convidado) => {
       return (
         <Fragment key={convidado.id}>
           <ClassComponent nome = {convidado.nome} estaNaLista = {convidado.estaNaLista}/>
         </Fragment>
       )
     })
    }
    <h3> Tarefas </h3>
     {
     convidados.map((convidado) => {
      return (
        <Fragment key={convidado.id}>
          <FunctionComponent nome = {convidado.nome} tarefa={convidado.tarefa}/>
          </Fragment>
      )
     })
    }
   
  

  {/* <ClassComponent nome="Nicolas" estaNaLista={true} />
  <ClassComponent nome="Pedro" estaNaLista={false} />
  <ClassComponent nome="Carolina" estaNaLista={true} /> */}

  {/* <FunctionComponent nome="Nicolas" tarefa="batata-frita" />
  <FunctionComponent nome="Pedro" tarefa="pizza" />
  <FunctionComponent nome="Carolina" tarefa="bebidas" /> */}
</div>

 );
}
 
export default App;
