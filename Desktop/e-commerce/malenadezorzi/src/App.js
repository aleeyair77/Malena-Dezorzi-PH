import './scss/app.scss';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Presentacion from './components/Presentacion';


function App() {
  return (
    <div className="App">
      <main>
      <ItemListContainer greeting={"Bienvenidos"} />
      <NavBar />
      <Presentacion />
      </main>
    </div>
  );
}

export default App;
