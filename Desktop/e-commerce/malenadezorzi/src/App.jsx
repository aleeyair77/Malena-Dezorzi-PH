import './App.css';
import NavBar from "./components/NavBar"
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <ItemListConteiner greeting={"Bienvenidos a mi pagina"} />
      </main>
    </div>
  );
}

export default App;
