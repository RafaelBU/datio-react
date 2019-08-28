import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import "./index.scss";
import App from "./presentation/App";
import Navbar from "./presentation/components/Navbar";
import DataTable from "./presentation/components/dataTable";
import DataForm from "./presentation/components/dataForm";
import NotFound from "./presentation/components/404";
import * as serviceWorker from "./presentation/serviceWorker";

const routing = (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={DataTable} />
                <Route path="/table" component={DataTable} />
                <Route path="/form" component={DataForm} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
