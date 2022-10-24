import React from 'react'
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
	    <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<a className="navbar-brand" href="/some/valid/uri">Ir GGSS</a>
			<button className="navbar-toggler" type="button" 
			data-bs-toggle="collapse" 
			data-bs-target="#navbarNav" 
			aria-controls="navbarNav" 
			aria-expanded="false" 
			aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Personales
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/datos-personales">Datos Personales</Link></li>
                        <li><Link className="dropdown-item" to="/domicilios">Domicilios</Link></li>
                    </ul>
                </li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Familia</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Liquidación</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Adic.Liquidación</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Trabajos Anteriores</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Documentación</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Licencias</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="/some/valid/uri">Extras</a>
				</li>
				<li className="nav-item">
			</li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar