import { Layout } from './components/Layout';
import { Inicio } from './components/Inicio';
import { ItemListContainer } from './components/ItemListContainer';
import { Presentacion } from './components/Presentacion';



function App() {
  return (
    <div className="App">
    <Layout>
      <Inicio />
      <ItemListContainer />
      <Presentacion />
      </Layout>
    </div>
  );
}

export default App;
