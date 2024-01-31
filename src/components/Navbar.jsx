import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo512.png";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark shadow">
                <div className="container">
                    <ul className="nav">
                        <img src={logo} alt="" style={{ height: "40px" }} />
                        <li>
                            <Link to='/' className="nav-link">Beranda</Link>
                        </li>
                        <li>
                            <Link to="/manejemen-buku" className="nav-link">Manejemen Buku</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;