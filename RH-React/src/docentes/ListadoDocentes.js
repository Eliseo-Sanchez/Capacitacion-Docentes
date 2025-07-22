import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListadoDocentes() {

    const urlBase = "/rh-app/docentes";

    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        cargarDocentes();
    }, []);

    const cargarDocentes = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado cargar docentes");
        console.log(resultado.data);
        setDocentes(resultado.data);
    }

    const eliminarDocente = async (id) => {    
        await axios.delete(`${urlBase}/${id}`);
        cargarDocentes();
    }

    return (
        <div className='container'>
            <div className="container text-center" style={{ margin: "30px" }}>
                <h3>Sistema de Capacitación Docentes</h3>
            </div>

            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {docentes.map((docente, indice) => (
                        <tr key={indice}>
                            <th scope="row">{docente.idDocente}</th>
                            <td>{docente.nombre}</td>
                            <td>{docente.departamento}</td>
                            <td>${docente.sueldo}</td>
                            <td className='text-center'>
                                <div>
                                    <Link to={`/editar/${docente.idDocente}`} 
                                    className='btn btn-warning btn-sm me-3'>Editar</Link>
                                    <button onClick={() => eliminarDocente(docente.idDocente)}
                                        className='btn btn-danger btn-sm'
                                    >Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
