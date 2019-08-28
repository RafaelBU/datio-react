import React from "react";
import {NavLink, withRouter} from "react-router-dom";

let Navbar = props => {
    const getNavLinkClass = path => {
        console.log("path es ", path);
        console.log("props es ", props);
        return props.location.pathname === path
            ? "nav-item active"
            : "nav-item";
    };

    return (
        // <nav className="navbar navbar-inverse">
        //     <div className="container-fluid">
        //         <div className="navbar-header">
        //             <button
        //                 type="button"
        //                 className="navbar-toggle collapsed"
        //                 data-toggle="collapse"
        //                 data-target="#bs-example-navbar-collapse-1"
        //                 aria-expanded="false"
        //             >
        //                 <span className="sr-only">Toggle navigation</span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //             </button>
        //             <a className="navbar-brand" href="/">
        //                 Al trote
        //             </a>
        //         </div>
        //         <div
        //             className="collapse navbar-collapse"
        //             id="bs-example-navbar-collapse-1"
        //         >
        //             <ul className="nav navbar-nav navbar-right">
        //                 {/* <li className={getNavLinkClass("/")}><NavLink to="/" >Listar</NavLink></li>
        //                    <li className={getNavLinkClass("/agregar")}><NavLink to="/agregar">Agregar</NavLink></li> */}
        //                 <li>
        //                     <NavLink to="/table">Data</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to="/form">Form</NavLink>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        // <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        //     <a className="navbar-brand" href="/">
        //         Menu
        //     </a>
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-toggle="collapse"
        //         data-target="#navbarSupportedContent"
        //         aria-controls="navbarSupportedContent"
        //         aria-expanded="false"
        //         aria-label="Toggle navigation"
        //     >
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div
        //         className="collapse navbar-collapse"
        //         id="navbarSupportedContent"
        //     >
        //         {/* <ul className="navbar-nav mx-auto">
        //             <li
        //                 className={getNavLinkClass("/table")}
        //                 style={{marginRight: 50}}
        //             >
        //                 <NavLink to="/table">Data</NavLink>
        //             </li>
        //             <li className={getNavLinkClass("/form")}>
        //                 <NavLink to="/form">Form</NavLink>
        //             </li>
        //         </ul> */}
        //         <ul className="nav justify-content-center">
        //             {/* <li className={getNavLinkClass("/table")}> */}
        //             <li className="nav-item">
        //                 <NavLink to="/table">Data</NavLink>
        //             </li>
        //             {/* <li className={getNavLinkClass("/form")}> */}
        //             <li className="nav-item">
        //                 <NavLink to="/form">Table</NavLink>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Menú
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav">
                    <li
                        className={getNavLinkClass("/table")}
                        style={{color: "white", padding: 20}}
                    >
                        <NavLink
                            to="/table"
                            activeStyle={{
                                color: "blue"
                            }}
                        >
                            Data
                        </NavLink>
                    </li>
                    <li
                        className={getNavLinkClass("/form")}
                        style={{color: "white", padding: 20}}
                    >
                        <NavLink
                            to="/form"
                            activeStyle={{
                                color: "blue"
                            }}
                        >
                            Form
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

Navbar = withRouter(Navbar);
export default Navbar;
