import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions} from "../../my-redux/my-redux";
import Loading from "../loading/loading";
import Avatar from "react-avatar";
import "./dataTable.scss";

function DataTable(props) {
    const {getDataDispatch, loadDataUser} = props;
    const [page, setPage] = useState(1);
    const [refContainer, setRefContainer] = useState(null);

    useEffect(() => {
        if (!loadDataUser || page > 1) {
            getDataDispatch(page);
        }
    }, [getDataDispatch, page, loadDataUser]);

    const onScroll = () => {
        const pageLimit =
            refContainer.scrollHeight - refContainer.scrollTop ===
            refContainer.clientHeight;

        if (pageLimit && props.lastData.length > 0) {
            setPage(page + 1);
        }
    };

    return (
        <div className="table-responsive">
            <h1 className="title-style">Listado de usuarios</h1>
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
                                        <th
                                            scope="row"
                                            className="align-element"
                                        >
                                            {user.id}
                                        </th>
                                        <td>
                                            <Avatar
                                                src={user.avatar}
                                                size={70}
                                                round={true}
                                            />
                                        </td>
                                        <td className="align-element">
                                            {user.first_name}
                                        </td>
                                        <td className="align-element">
                                            {user.last_name}
                                        </td>
                                        <td className="align-element">
                                            {user.email}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Loading isActive={page === 1} />
            )}
        </div>
    );
}

const getDataDispatch = actions.getDataDispatch;

export default connect(
    (appState, ownProps) => ({
        dataUser: appState.app.dataUser,
        lastData: appState.app.lastData,
        loadDataUser: appState.app.loadDataUser
    }),
    dispatch =>
        bindActionCreators(
            {
                getDataDispatch
            },
            dispatch
        )
)(DataTable);
