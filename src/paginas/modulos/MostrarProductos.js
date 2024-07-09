import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader';
import Footer from '../../Componentes/Footer';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import APIInvoke from '../../configuracion/APIInvoke';
import swal from 'sweetalert';



const MostrarProductos = () => {
    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
        const response = await APIInvoke.invokeGET('/api/productos');
        setProductos(response);
    }

    useEffect(() => {
        getProductos();
    }, [])

    const eliminarProductos = async (e, idProducto) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/productos/${idProducto}`);



        if (response.msg === "el producto a sido eliminado") {
            const msg = "El Producto fue eliminado correctamente";
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
            getProductos();
        } else {
            const msg = "El Producto no pudo ser eliminado correctamente";
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

        }

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
                            <h3 className='card-title'> <Link to={"/productos/agregar"} className='btn btn-block btn-primary btn-sm '>Crear Producto</Link></h3>
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
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '15%' }}>Nombre producto</th>
                                        <th style={{ width: '15%' }}>Marca producto</th>
                                        <th style={{ width: '15%' }}>Valor</th>
                                        <th style={{ width: '15%' }}>Peso</th>
                                        <th style={{ width: '15%' }}>Codigobarras</th>
                                        <th style={{ width: '10%' }}>Ciudadorigen</th>
                                        <th style={{ width: '15%' }}>Acciones</th>
                                    </tr>



                                </thead>
                                <tbody>

                                    {productos.map((producto, index) => (
                                        <tr key={index}>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.marca}</td>
                                            <td>{producto.valor}</td>
                                            <td>{producto.peso}</td>
                                            <td>{producto.codigobarras}</td>
                                            <td>{producto.ciudadorigen}</td>
                                            
                                            <td>
                                                <Link to={`/productos/editar/${producto._id}`} className='btn btn-primary mt-2 mb-2'><i className='fa-solid fa-pen-to-square'></i></Link>
                                                <button onClick={(e) => eliminarProductos(e, producto._id)} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>

                                            </td>





                                        </tr>

                                    ))}





                                </tbody>



                            </table>


                        </div>

                    </div>
                </section>

            </div>
            <Footer></Footer>

        </div>
    );
}

export default MostrarProductos
