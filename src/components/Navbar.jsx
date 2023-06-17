import React from "react";
import logo from "../assets/logo512.png";

function Navbar() {
    return (
        <div> 
            <nav className="navbar navbar-expand-lg bg-dark shadow">
                <div className="container">
                    <ul className="nav"> 
                        <img src={logo} alt="" style={{height: "40px"}} />
                    <li>
                        <a href="/" className="nav-link">Beranda</a>
                    </li>
                    <li>
                        <a href="/manejemen-buku" className="nav-link">Manejemen Buku</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;