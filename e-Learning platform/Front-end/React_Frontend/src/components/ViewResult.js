// import React from 'react'
import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import constant from './constant'


const CodeLineNav = props =>(
    <tr>
        <td>{props.codeLineObj.lineNumber}</td>
        <td>{props.codeLineObj.pStatement}</td>
        <td>{props.codeLineObj.cs}</td>
        <td>{props.codeLineObj.cnc}</td>
        <td>{props.codeLineObj.ci}</td>
        <td>{props.codeLineObj.ctc}</td>
        <td>{props.codeLineObj.tw}</td>
        <td>{props.codeLineObj.cps}</td>
        <td>{props.codeLineObj.cr}</td>

        {/* <td>
            <Link className="btn btn-primary" to={"/trainsModify/"+props.instructor._id}>Modify</Link>
        </td>
        <td>
            <Link className="btn btn-danger" to={"/trainsDelete/"+props.instructor._id}>Delete</Link>
        </td> */}
    </tr>
);


export default class ViewResult extends Component {


    constructor(props) {
        super(props);
        this.state = {
            codeNumber: this.props.location.state.detail,
            CodeLineList:[],
            cpValue:'',
        };

    }
    // +this.state.codeNumber
    componentDidMount() {
        axios.get(constant()+'/codeline/'+this.state.codeNumber)
            .then(res => {
                this.setState({CodeLineList: res.data.codeLineList});
                this.setState({cpValue: res.data.cpValue});
                console.log(this.state.CodeLineList);
                console.log(this.state.cpValue);

            }).catch(err => {
                console.log(err);
            });

    }

    homeButtonHandler = () => {
        this.props.history.push("/UploadPage")
        this.setState({CodeLineList: []});
    }

    codeLineListFunction() {
        return this.state.CodeLineList.map(function(codeLineList,index){
            return <CodeLineNav codeLineObj={codeLineList} key={index} />;
        })
    }

    render() {
        return (
            <div className="container">
                    <button type="button" className="btn btn btn-outline-success registerBtn" onClick={this.homeButtonHandler}>Home</button> 
                    <table className="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Statement</th>
                            <th>CS</th>
                            <th>CNC</th>
                            <th>CI</th>
                            <th>CTC</th>
                            <th>TW</th>
                            <th>CPS</th>
                            <th>CR</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.codeLineListFunction()}
                        </tbody>

                    </table>
                    <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-2">CP</div>
                            <div className="col-sm-4"></div>
                            <div className="col-sm-2">{this.state.cpValue}</div>
                    </div>
                    {/* <div className="form-group">
                        <input type="submit"
                               value="Upload File"
                               className="btn btn-primary"/>
                    </div>
                    <button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.viewResultButtonHandler}>View Result</button> */}
            </div>
        );
    }
}


// {this.state.CodeLineList.map((rowData, index) => (
//     <tr>
//            <th scope="row">{index + 1}</th>
//            <td>{rowData.codeNumber}</td>
//            <td>{rowData.lineNumber}</td>
//            <td>{rowData.pStatement}</td>
//    </tr>

// ))}

// export default ViewResult;

// render(){
//     return(
//     <table bordered>
//                      <thead>
//                      <tr>
//                         <th>#</th>
//                          <th>First Name</th>
//                          <th>Last Name</th>
//                          <th>Username</th>
//                     </tr>
//                      </thead>
//                      <tbody>
//     {this.state.CodeLineList.map((rowData, index) => (
//                      <tr>
//                          <th scope="row">{index + 1}</th>
//                          <td>{rowData.codeNumber}</td>
//                          <td>{rowData.lineNumber}</td>
//                          <td>{rowData.pStatement}</td>
//                      </tr>
    
//     ))}
    
//                     </tbody>
//     </table>
//     )
//     }