import React, {useState} from "react";
import "./dataForm.scss";

function DataForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");

    const showInformation = e => {
        e.preventDefault();
        console.log("name ", name);
        console.log("apellidos es ", lastName);
        console.log("email ", email);
        console.log("comments ", comments);
        alert(
            "información enviada con éxito ",
            name
            // lastName,
            // email,
            // comments
        );
    };

    return (
        <div className="container-fluid">
            <h1 className="title-style">Formulario de contacto</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="nameInput">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        placeholder="Introduce tu nombre"
                        onChange={event => setName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nameInput">Apellidos</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastNameInput"
                        placeholder="Introduce tus apellidos"
                        onChange={event => setLastName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="Introduce tu email"
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="textArea">Añade tus comentarios</label>
                    <textarea
                        className="form-control"
                        id="textArea"
                        rows="3"
                        onChange={event => setComments(event.target.value)}
                        required
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={e => showInformation(e)}
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Enviar información
                </button>
            </form>
            {/* <div
                className="modal fade show"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default DataForm;
