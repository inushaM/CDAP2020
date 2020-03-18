import React, { Component } from 'react'
import { Link , withRouter} from 'react-router-dom';
import axios from 'axios'
import constant from '../service/constant';


class Login extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
         password:''
      }
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post(constant()+'/login', this.state)
        .then(response => {
            console.log(response)
            if(response.data.responseCode === "LOGIN_SUCCESS"){
              this.props.history.push({
                pathname : '/UploadPage',
                state: { detail: response.data }
              });

            }else{
                this.props.history.push("/")
            }
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    registerButtonHandler = () => {
        this.props.history.push("/Register")
        
    }

  render() {
    const { username, password } = this.state;
    return (
        <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Login
            </h3>
          </div>
          <div className="panel-body">
          <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label>User Name:</label>
                <input type="text" className="form-control" name="username" value={username} onChange={this.changeHandler} placeholder="User name" required/>
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" name="password" value={password} onChange={this.changeHandler} placeholder="Password" required />
              </div>
              <button type="submit" className="btn btn-outline-primary loginBtn">Login</button>
              <button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.registerButtonHandler}>Register</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
