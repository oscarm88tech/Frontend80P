import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader';
import Footer from '../../Componentes/Footer';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert';


function AgregarProductos() {

    const navigate = useNavigate();
    const [productos, setProductos] = useState({
        nombre: '',
        marca: '',
        valor: '',
        peso: '',
        codigobarras: '',
        ciudadorigen: ''
        
    });
    const { nombre, marca, valor, peso, codigobarras, ciudadorigen } = productos

    const Onchange = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        })

    }

    useEffect(() => {

        document.getElementById("nombre").focus();

    }, [])

    const CrearProductos = async () => {
        const data = {
            nombre: productos.nombre,
            marca: productos.marca,
            valor: productos.valor,
            peso: productos.peso,
            codigobarras: productos.codigobarras,
            ciudadorigen: productos.ciudadorigen
            
        }

        const response = await APIInvoke.invokePOST('/api/productos', data)
        const idProductos = response._id;

        if (idProductos === '') {
            const msg = 'Hubo un error al agregar un Producto';
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            navigate("/productos");

            const msg = "El producto fue creado con exito";
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });

            setProductos({
                nombres: '',
                apellidos: '',
                cedula: '',
                correo: '',
                numeroContacto: '',
                nit: '',
                direccion: ''
            });

        }



    }

    const Onsubmit = (e) =>{
        e.preventDefault();
        CrearProductos();
    }



    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className='content-wrapper'>
                <ContentHeader

                    titulo={"Dashboard"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />
                <section className='content'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3 className='card-title'> <Link to={"/productos/agregar"} className='btn btn-block btn-primary btn-sm '>Crear Productos</Link></h3>
                            <div className='card-tools'>
                                <button type='button' className='btn btn-tool' data-card-widget="collapse" title='collapse'>
                                    <i className='fas fa-minus'></i>
                                </button>

                                <button type='button' className='btn btn-tool' data-card-widget="remove" title='Remove'>
                                    <i className='fas fa-times'></i>
                                </button>
                            </div>
                        </div>
                        <div className='card-body'>

                            <form onSubmit={Onsubmit}>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>Nombre</label>
                                        <input type='text'
                                            className='form-control'
                                            placeholder='Ingrese nombre del producto'
                                            id='nombre'
                                            name='nombre'
                                            value={nombre}
                                            onChange={Onchange}
                                            required

                                        />

                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='marca'>Marca</label>
                                        <input type='text'
                                            className='form-control'
                                            placeholder='Ingrese la marca del producto'
                                            id='marca'
                                            name='marca'
                                            value={marca}
                                            onChange={Onchange}
                                            required

                                        />

                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='valor'>Valor</label>
                                        <input type='number'
                                            className='form-control'
                                            placeholder='Ingrese el valor del producto'
                                            id='valor'
                                            name='valor'
                                            value={valor}
                                            onChange={Onchange}
                                            required

                                        />

                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='peso'>Peso</label>
                                        <input type='number'
                                            className='form-control'
                                            placeholder='Ingrese el peso del producto en gramos'
                                            id='peso'
                                            name='peso'
                                            value={peso}
                                            onChange={Onchange}
                                            required

                                        />

                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='codigobarras'>Codigo de Barras</label>
                                        <input type='number'
                                            className='form-control'
                                            placeholder='Ingrese el Codigo de Barras'
                                            id='codigobarras'
                                            name='codigobarras'
                                            value={codigobarras}
                                            onChange={Onchange}
                                            required

                                        />

                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='ciudadorigen'>Ciudad de Origen</label>
                                        <input type='text'
                                            className='form-control'
                                            placeholder='Ingrese su nit'
                                            id='ciudadorigen'
                                            name='ciudadorigen'
                                            value={ciudadorigen}
                                            onChange={Onchange}
                                            required

                                        />

                                        <div className='input-group-append'>
                                            <div className='input-group-text'>
                                                <span className='fas fa-user' />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                               

                                <div className='card-footer'>
                                    <button type='submit' className='btn btn-primary'>AgregaR</button>


                                </div>
                            </form>


                        </div>

                    </div>
                </section>

            </div>
            <Footer></Footer>

        </div>
    )
}

export default AgregarProductos
