import MyInfo from './MyInfo';
import Greeting from './components/Greeting'

import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: '01'
  }

  const banana = {
    firstName: 'ban',
    lastName: 'ana'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greeting user={banana} />
        <p>
          Hello, world!
        </p>
        <Greeting user={user} />
        <MyInfo/>
      </header>
    </div>
  );
}

export default App;
