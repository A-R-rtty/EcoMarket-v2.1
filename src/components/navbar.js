import react from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function NavBarPrincipal() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="Home.html">
                    <img src="images/Logo-Claro.png" style={{ width: 150 }} alt />
                </a>
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
                            <input className="form-control search-input" type="search" placeholder="¿Qué estás buscando?" aria-label="Search" />
                        </form>
                        {/* CARRITO */}
                        <a href="Carrito.html" className="cart-link position-relative">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span id="cantidadCarrito" className="badge rounded-pill bg-success">0</span>
                        </a>
                    </div>
                    {/* DERECHA: MENÚ */}
                    <ul className="navbar-nav nav-right">
                        <li className="nav-item">
                            <a className="nav-link" href="Catalogo.html">
                                <FontAwesomeIcon icon={faLeaf} /> Catalogo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Nosotros.html">
                                <FontAwesomeIcon icon={faUsers} /> Nosotros
                            </a>
                        </li>
                        {/* PERFIL */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <FontAwesomeIcon icon={faUser} /> Cuenta
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Iniciar Sesión</a></li>
                                <li><a className="dropdown-item" href="#">Registrarse</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default NavBarPrincipal;