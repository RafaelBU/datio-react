import React, {useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import home from "../../assets/home.png";
import "./navbar.scss";

let Navbar = props => {
    const [menu, setMenu] = useState(false);

    const toogleMenu = () => {
        setMenu(!menu);
    };

    const show = menu ? "show" : "";

    const getNavLinkClass = path => {
        return props.location.pathname === path
            ? "nav-item active"
            : "nav-item";
    };

    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-primary navbar-dark">
            <NavLink to="/">
                <button className="navbar-brand button-link">
                    <img src={home} alt="home" />
                </button>
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => toogleMenu()}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + show}>
                <ul className="navbar-nav">
                    <li
                        className={getNavLinkClass("/table")}
                        style={{padding: 10}}
                    >
                        <NavLink to="/users">
                            <button
                                className="nav-link button-link"
                                onClick={() => toogleMenu()}
                            >
                                Usuarios
                            </button>
                        </NavLink>
                    </li>
                    <li
                        className={getNavLinkClass("/form")}
                        style={{padding: 10}}
                    >
                        <NavLink to="/form">
                            <button
                                className="nav-link button-link"
                                onClick={() => toogleMenu()}
                            >
                                Formulario de contacto
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Navbar = withRouter(Navbar);
export default Navbar;
