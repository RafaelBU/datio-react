import React from "react";
import "./404.scss";
import {NavLink} from "react-router-dom";

function NotFound() {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-12 text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>
                            </div>

                            <div class="contant_box_404">
                                <h3 class="h2">Upss, hubo un problema</h3>

                                <p>Parece que esta página no existe</p>

                                <NavLink to="/">
                                    <button className="link_404">
                                        Volver al inicio
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
