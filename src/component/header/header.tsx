import styles from "./header.module.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "../../pages/dashboard/dashboard";
import React from "react";

const ProfileLazy = React.lazy(() => import("../../pages/profile/profile"));
const AboutLazy = React.lazy(() => import("../../pages/about/about"));

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Router>
                <nav className="navbar navbar-expand-lg sticky-top bg-primary">
                    <div className="container-fluid">

                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/admin" aria-disabled="true">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <React.Suspense fallback="Loading...">
                    <Switch>
                        <Route path="/" component={Dashboard} exact />
                        <Route path="/profile" component={ProfileLazy} />
                        <Route path="/about" component={AboutLazy} />
                        <Route path="/admin" component={AboutLazy} />
                    </Switch>
                </React.Suspense>
            </Router>
        </div>
    );
}

export default Header;