import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader';
import Footer from '../../Componentes/Footer';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import APIInvoke from '../../configuracion/APIInvoke';
// import swal from 'sweetalert';


function EditarProductos() {

    const navigate = useNavigate();

    // Definimos los estados
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [valor, setValor] = useState('');
    const [peso, setPeso] = useState('');
    const [codigobarras, setCodigobarras] = useState('');
    const [ciudadorigen, setCiudadorigen] = useState('');
    const { id } = useParams();

    // creamos la funcion de modificar clientes
    const ModificarProductos = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/productos/${id}`, {
            nombre: nombre, marca: marca, valor: valor, peso: peso, codigobarras: codigobarras, ciudadorigen: ciudadorigen
        })
        navigate('/productos');
    }

    useEffect(() => {
        getproductos()
        // eslint-disable-next-line
    }, []);

    const getproductos = async () => {
        const response = await APIInvoke.invokePUT(`/api/productos/${id}`)
        setNombre(response.nombre);
        setMarca(response.marca);
        setValor(response.valor);
        setPeso(response.peso);
        setCodigobarras(response.codigobarras);
        setCiudadorigen(response.ciudadorigen);
        

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

                            <form onSubmit={ModificarProductos}>

                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>Nombre</label>
                                        <input type='text'
                                            className='form-control'
                                            placeholder='Ingrese nombre del producto'
                                            id='nombre'
                                            name='nombre'
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
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
                                            onChange={(e) => setMarca(e.target.value)}
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
                                            onChange={(e) => setValor(e.target.value)}
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
                                            onChange={(e) => setPeso(e.target.value)}
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
                                            onChange={(e) => setCodigobarras(e.target.value)}
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
                                            placeholder='Ingrese la Ciudad de Origen'
                                            id='ciudadorigen'
                                            name='ciudadorigen'
                                            value={ciudadorigen}
                                            onChange={(e) => setCiudadorigen(e.target.value)}
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
                                    <button type='submit' className='btn btn-primary'>EditaR</button>


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

export default EditarProductos
