import React, {useState} from "react";

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
    };

    return (
        <div className="container-fluid">
            <h1 style={{textAlign: "center", margin: 40}}>
                Formulario de contacto
            </h1>
            <form>
                <div className="form-group">
                    <label for="nameInput">Nombre</label>
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
                    <label for="nameInput">Apellidos</label>
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
                    <label for="emailInput">Email</label>
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
                    <label for="textArea">Añade tus comentarios</label>
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
                >
                    Enviar información
                </button>
            </form>
        </div>
    );
}

export default DataForm;
