import React from "react";
import "./home.scss";

function Home() {
    return (
        <div className="container-fluid">
            <h1 className="title-style">Página de inicio</h1>
            <div className="home-container">
                <h4>
                    Esta es la home de la app de prueba, pulsa en alguna de las
                    secciones del menú para ver el contenido
                </h4>
            </div>
        </div>
    );
}

export default Home;
