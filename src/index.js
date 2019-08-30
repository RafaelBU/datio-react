import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {store} from "./presentation/my-redux/my-redux";
import {bindActionCreators} from "redux";
import "./index.scss";
import App from "./presentation/App";
import DataTable from "./presentation/components/users/dataTable";
import DataForm from "./presentation/components/form/dataForm";
import NotFound from "./presentation/components/404/404";
import * as serviceWorker from "./presentation/serviceWorker";

function routing() {
    return (
        <Router>
            <div>
                <App />
                <Switch>
                    <Route exact path="/" component={DataTable} />
                    <Route path="/users" component={DataTable} />
                    <Route path="/form" component={DataForm} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

const AppConnect = connect(
    (appState, ownProps) => ({
        // appState: appState,
        // scene: appState.app.scene,
        // user: appState.users.user,
        // error: appState.error
    }),
    dispatch => bindActionCreators({}, dispatch)
)(routing);

ReactDOM.render(
    <Provider store={store}>
        <AppConnect />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
