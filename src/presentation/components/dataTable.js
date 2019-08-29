import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions} from "../my-redux/my-redux";
import Loading from "./loading";
import "./dataTable.scss";

function DataTable(props) {
    const {getDataDispatch, clearDataDispatch} = props;
    const [page, setPage] = useState(1);
    const [refContainer, setRefContainer] = useState(null);

    useEffect(() => {
        getDataDispatch(page);
        return () => clearDataDispatch();
    }, [getDataDispatch, page, clearDataDispatch]);

    const onScroll = () => {
        const pageLimit =
            refContainer.scrollHeight - refContainer.scrollTop ===
            refContainer.clientHeight;

        if (pageLimit && page < 2) {
            setPage(page + 1);
        }
    };

    return (
        <div className="table-responsive">
            <h1 style={{textAlign: "center", margin: 40}}>
                Listado de usuarios
            </h1>
            {props.loadDataUser ? (
                <div
                    className="table-container"
                    onScroll={() => onScroll()}
                    ref={ref => {
                        setRefContainer(ref);
                    }}
                >
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Avatar</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.dataUser.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{user.id}</th>
                                        <td>
                                            <img
                                                src={user.avatar}
                                                width={70}
                                                height={70}
                                                alt="Avatar"
                                            />
                                        </td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

const getDataDispatch = actions.getDataDispatch;
const clearDataDispatch = actions.clearDataDispatch;

export default connect(
    (appState, ownProps) => ({
        dataUser: appState.app.dataUser,
        loadDataUser: appState.app.loadDataUser
    }),
    dispatch =>
        bindActionCreators(
            {
                getDataDispatch,
                clearDataDispatch
            },
            dispatch
        )
)(DataTable);
