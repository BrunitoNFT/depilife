import './App.css'
import Layout from './layout/Layout';
import Inicio from './paginas/Inicio';
import NuevoCliente from './paginas/NuevoCliente';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {useState} from "react"

function App() {

  const [listado,setListado] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Inicio setListado={setListado} listado={listado}/>}/>
          <Route path='nuevo'  element={<NuevoCliente setListado={setListado} listado={listado}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
