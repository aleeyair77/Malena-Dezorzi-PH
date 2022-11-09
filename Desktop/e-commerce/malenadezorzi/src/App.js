import './scss/app.scss';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Presentacion from './components/Presentacion';


function App() {
  return (
    <div className="App">
      <main>
      <NavBar />
      <ItemListContainer greeting={"Malena DeZorzi"} />
      <Presentacion />
      </main>
    </div>
  );
}

export default App;
