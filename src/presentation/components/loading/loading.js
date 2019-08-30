import React from "react";

function Loading(props) {
    return props.isActive ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Cargando...</span>
            </div>
        </div>
    ) : (
        ""
    );
}

export default Loading;
