import { Layout } from './components/Layout';
import { Inicio } from './components/Inicio';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Presentacion } from './components/Presentacion';



function App() {
  return (
    <div className="App">
    <Layout>
      <Presentacion />
      <Inicio />
      <ItemListContainer />
      </Layout>
    </div>
  );
}

export default App;
