import React from 'react'
import { Link } from 'react-router-dom';
import ContentHeader from './Componentes/ContentHeader';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';
import SidebarContainer from './Componentes/SidebarContainer';



const Home = () => {
  return (
    <div className='wrapper'>
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className='content-wrapper'>
            <ContentHeader 
            
            titulo= {"Menu Principal"}
            breadCrumb1 = {"Inicio"} 
            breadCrumb2 = {"Dashboard"} 
            ruta1 = {"/home"}
            />

            <section className='content'>
                <div className='container-fluid'>
                    <div className='row'>
                        
                        <div className='col-lg-3 col-6'>
                            <div className='small-box bg-info'>
                                <div className='inner'>
                                    <h3>Clientes</h3>


                                </div>

                                <div className='icon'>
                                    <i className='fa fa-edit'/>

                                </div>

                                <Link to={"/clientes"} className='small-box-footer'>Ver clientes</Link>


                            </div>
                            <div className='small-box bg-info'>
                                <div className='inner'>
                                    <h3>Productos</h3>


                                </div>

                                <div className='icon'>
                                    <i className='fa fa-edit'/>

                                </div>

                                <Link to={"/productos"} className='small-box-footer'>Ver productos</Link>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>

    </div>
  );
}

export default Home;
