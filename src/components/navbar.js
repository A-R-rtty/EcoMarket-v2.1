import react from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../style.css";

//Link = navega sin recargar la pagina osea que mantiene el estado sin perder cosas, como, si al agregar a carrito se suma 1 con a href, este recagra pagina y se pierde, link no lo hace, a ref se usa para buscar o mandar a otra pagina web, y link para una ruta de la misma app
function NavBarPrincipal() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/images/Logo-Claro.png" style={{ width: 150 }} alt />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* IZQUIERDA: SEARCH */}
                    <div className="nav-left">
                        <form className="search-box" role="search">
                            <button className="btn-search" type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                                
                            </button>
                            <input className=" search-input search-box" type="search" placeholder="¿Qué estás buscando?" aria-label="Search" />
                        </form>
                        {/* CARRITO */}
                        <Link to="/carrito" className="cart-link position-relative">

                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span id="cantidadCarrito" className="badge rounded-pill bg-success">0</span>
                        </Link>
                    </div>
                    {/* DERECHA: MENÚ */}
                    <ul className="navbar-nav nav-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalogo">
                                <FontAwesomeIcon icon={faLeaf} /> Catalogo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nosotros">
                                <FontAwesomeIcon icon={faUsers} /> Nosotros
                            </Link>
                        </li>
                        {/* PERFIL */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <FontAwesomeIcon icon={faUser} /> Cuenta
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item" to="/login">
                                    Iniciar Sesión
                                </Link></li>
                                <li><Link className="dropdown-item" to="/register">
                                    Registrarse
                                </Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default NavBarPrincipal;