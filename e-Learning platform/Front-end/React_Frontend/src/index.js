import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,HashRouter,  NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Register from './components/Register';
import Login from './components/Login';
import Student from './components/Student';
import Lecturer from './components/Lecturer';

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
            <Route  path='/Student' component={Student} />
            <Route  path='/Lecturer' component={Lecturer} />
        </div>
        {/* </div> */}
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
