import './App.css';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <h1>Testando Css</h1>
      <Frase/>
      <Frase/>
      <SayMayName nome="Matheus"/>
      <SayMayName nome="Gabriell"/>
      <Pessoa 
      nome="Rodrigo" 
      idade="28" 
      profissao="Programador" 
      foto="https://res.cloudinary.com/demo/image/upload/c_thumb,g_face,h_150,w_150/r_20/front_face"
      />
      <List/>
    </div>
  )
}

export default App;
