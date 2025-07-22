import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navegacion() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Navegar de vuelta al login
        navigate('/login');
    };

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Sistema de Capacitación Docentes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/agregar">Agregar Docente</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="btn btn-outline-light" onClick={handleLogout}>
                                    Cerrar Sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
