import { Fragment } from 'react';
import './App.css';
import Home from './Home';
import Registro from "./paginas/auth/Registro";
import Login from "./paginas/auth/Login";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MostrarClientes from './paginas/modulos/MostrarClientes';
import AgregarClientes from './paginas/modulos/AgregarClientes';
import EditarClientes from './paginas/modulos/EditarClientes';
import RutasProtegidas from './paginas/auth/RutasProtegidas';
import MostrarProductos from './paginas/modulos/MostrarProductos';
import AgregarProductos from './paginas/modulos/AgregarProductos';
import EditarProductos from './paginas/modulos/EditarProductos';

// importamos el componente 

function App() {
  return (
    <div className="App">
      <Fragment>
      <BrowserRouter>
      <Routes>
      <Route path='/'exact element = {<Navigate to="/login"/>}/>
      <Route path='/login'exact element = {<Login/>}/>
      <Route path='/registro'exact element = {<Registro/>}/>
      <Route path='/home'exact element = {<RutasProtegidas element = {<Home/>} /> }></Route>
      <Route path='/clientes'exact element = {<RutasProtegidas element = {<MostrarClientes/>}/>} ></Route>
      <Route path='/clientes/agregar'exact element = {<RutasProtegidas element = {<AgregarClientes/>}/>} ></Route>
      <Route path='/clientes/editar/:id'exact element = {<RutasProtegidas element = {<EditarClientes />}/>} ></Route> 

      <Route path='/productos'exact element = {<MostrarProductos/>}></Route>
      <Route path='/productos/agregar'exact element = {<AgregarProductos/>}></Route>
      <Route path='/productos/editar/:id'exact element = {<EditarProductos/>}></Route>


        
      </Routes>
      </BrowserRouter>
      </Fragment>
      
    </div>
  );
}

export default App;
