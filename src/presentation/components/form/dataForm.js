import React, {useState, useEffect} from "react";
import Modal from "react-responsive-modal";
import "./dataForm.scss";

function DataForm() {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");

    const onCloseModal = () => {
        setOpen(false);
    };

    const showInformation = e => {
        e.preventDefault();
        setOpen(true);
    };

    useEffect(() => {
        const re = /\S+@\S+\.\S+/;
        const condition =
            name === "" ||
            lastName === "" ||
            email === "" ||
            comments === "" ||
            !re.test(email);
        setDisabled(condition);
    }, [name, lastName, email, comments]);

    return (
        <div className="container-fluid">
            <h1 className="title-style">Formulario de contacto</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="nameInput"> * Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        placeholder="Ejemplo: Pepe"
                        onChange={event => setName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nameInput"> * Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastNameInput"
                        placeholder="Ejemplo: Pérez"
                        onChange={event => setLastName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput"> * Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        placeholder="Ejemplo: pepe@mail.com"
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="textArea"> * Añade tus comentarios</label>
                    <textarea
                        className="form-control"
                        id="textArea"
                        rows="3"
                        onChange={event => setComments(event.target.value)}
                        required
                    ></textarea>
                </div>
                {disabled ? (
                    <div className="button-container">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled
                        >
                            Enviar información
                        </button>
                    </div>
                ) : (
                    <div className="button-container">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={e => showInformation(e)}
                        >
                            Enviar información
                        </button>
                    </div>
                )}
            </form>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Información enviada</h2>
                <p>
                    Hola <span className="span-style">{name}</span>{" "}
                    <span className="span-style">{lastName}</span>, tu mensaje
                    ha sido enviado, recibirás respuesta en tu correo{" "}
                    <span className="span-style">{email}</span>
                </p>
            </Modal>
        </div>
    );
}

export default DataForm;
