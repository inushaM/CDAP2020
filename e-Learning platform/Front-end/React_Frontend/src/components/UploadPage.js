import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import constant from './constant'

class Add_Assignment_Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',
            codeName:'',
            codeNumber:'',
            conditionValue:'',
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onChangeCodeKeyName = this.onChangeCodeKeyName.bind(this);

    }
    onFormSubmit(e) {
        e.preventDefault(); // Stop form submit
        const data = new FormData();

        data.append("file", this.state.file);
        data.append("codename", this.state.codeName);

        this.setState({conditionValue: "true"});
        axios.post(constant()+'/sendfile', data).then(res => {
            this.setState({conditionValue: "false"});
            this.setState({codeNumber: res.data});
            // alert(`Calculated successfully`);
            console.log(res);
        }).catch(err => {
            alert(`Calculation error`);
            console.log(err);
        });
    }

    onChangeFile(e) {
        this.setState({
            file: e.target.files[0]
        })
    }

    onChangeCodeKeyName(e) {
        this.setState({
            codeName: e.target.value
        })

    }

    viewResultButtonHandler = () => {
        this.props.history.push({
            pathname : '/ViewResult',
            state: { detail: this.state.codeNumber}
          });
        
    }

    render() {

        const isListAvailable = this.state.codeNumber;
        const isProcessing = this.state.conditionValue;

        let button;
        let viewMessageCalcutating;
        let viewMessageSuccessful;

        if (isListAvailable != '') {
          button = <button type="button" className="btn btn-outline-success resultViewBtn" onClick={this.viewResultButtonHandler}>View Result</button>;
        } 

        if (isProcessing === 'true') {
            viewMessageCalcutating = <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Calcutating!</strong> Please wait.
          </div>
        } 

        if (isListAvailable != '') {
            viewMessageSuccessful = <div class="alert alert-success" role="alert">
            Successfully Calculated.
          </div>
          } 

        return (
            <div className="container" style={{backgroundColor: "#FFF"}}>
                <br/><br/><br/>
                <form onSubmit={this.onFormSubmit}>
                    <h2>Upload test file</h2>
                    <br/><br/>
                    <table className="table">
                        <thead>
                        <tr>

                        </tr>
                        </thead>
                        <tbody>
                        <tr className="success">
                            <td>Code Key Name</td>
                            <td><input type="text"
                                       value={this.state.codeName}
                                       onChange={(e) => this.onChangeCodeKeyName(e)}
                            /></td>
                        </tr>
                        <tr className="info">
                            <td>Upload Source File here</td>
                            <td>
                                <div>
                                    <label>Select File</label>
                                    <br/><br/>
                                    <input type="file" className="form-control"
                                           onChange={this.onChangeFile}
                                           required
                                    />
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="row"> 
                        <div className="col-sm-2">
                            <input type="submit" value="Upload File" className="btn btn-primary"/>
                        </div>
                        <div className="col-sm-2">
                            {button}
                        </div>
                        <div className="col-sm-8"></div>
                    </div>
                    <br/><br/>
                    <div>
                        {viewMessageSuccessful}
                        {viewMessageCalcutating}
                    </div>
                </form>
            </div>
        )
    }
}

export default Add_Assignment_Component;