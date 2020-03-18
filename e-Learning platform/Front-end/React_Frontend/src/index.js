import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,HashRouter,  NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Register from './components/Register';
import Login from './components/Login';
import UploadPage from './components/UploadPage';
import ViewResult from './components/ViewResult';

ReactDOM.render(
    <Router>
        {/* <div style={secionStyle}> */}
        <div>
        <nav className="navbar navbar-light navBar" >
            <a className="navbar-brand " href="#"><h4 className="navBarTitle">E-Learning Platform</h4></a>
        </nav>
        <br/>
            <Route exact path='/' component={Login} />
            <Route  path='/Register' component={Register} />
            <Route  path='/App' component={App} />
            <Route  path='/UploadPage' component={UploadPage} />
            <Route  path='/ViewResult' component={ViewResult} />
        </div>
        {/* </div> */}
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
