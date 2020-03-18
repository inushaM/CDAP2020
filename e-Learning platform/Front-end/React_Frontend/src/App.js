
import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import constant from '../src/service/constant';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      //  LocationList:[],
      //  startTimeList:[],
       startLocation: '',
       endLocation: '',
       startTime: ''


    }
  }


  changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value })
  }


  submitHandler = (e) => {
    e.preventDefault()
    const{startLocation , endLocation , startTime} = this.state
    console.log(this.state)
    axios.post(constant()+'/findtrain', {startLocation , endLocation , startTime} )
    .then(response => {
        console.log(response)
        if(response.data === ''){
          this.props.history.push("/App")
        }else{
          this.props.history.push({
            pathname : '/AddTicket',
            state: { detail: response.data }
            } 
          );
            
        }
        
    })
    .catch(error => {
        console.log(error)
    })
  }



  componentWillMount() {
    // e.preventDefault()
    axios.get(constant()+'/trarin/location')
    .then(response => {
      this.setState({ 
        LocationList: response.data
        
      })

    }).catch(error => {
      console.log(error)
    })
    console.log(this.LocationList)

    axios.get(constant()+'/trarin/starttime')
    .then(response => {
      this.setState({ 
        startTimeList: response.data
        
      })

    }).catch(error => {
      console.log(error)
    })
  }

  
  logOutButtonHandler = () => {
    this.props.history.push("/")
}

  // renderLocationList() {
  //   return (this.state.LocationList.map(data =>({label:data,value:data})))
  //  }

  //  renderTimeList() {
  //   return (this.state.startTimeList.map(data =>({label:data,value:data})))
  //  }

  
  render() {
    const { startLocation, endLocation, startTime } = this.state;
    
    // let options = this.state.startLocation.map(function (LocationList) {
    //   return { value: LocationList, label: LocationList};
    // })
    return (

        <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <button type="submit" className="btn btn-outline-danger btn float-right" onClick={this.logOutButtonHandler}>Logout</button>
            <h3 className="panel-title">
              Train Ticket Reservation
            </h3>
           
          </div>
          </div>
          </div>
          </div>
          <div className="row">
          <div className="col-lg-12">
          <div className="panel-body">
          <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label>Start Location:</label>
                {/* <Select options={ this.renderLocationList() } value={startLocation}  name="startLocation" onChange={this.changeHandler} placeholder='Select Loaction'/> */}
                <input type="text" className="form-control" name="startLocation" value={startLocation} onChange={this.changeHandler} placeholder="Start Location" />
              </div>
              <div className="form-group">
                <label>End Location:</label>
                {/* <Select options={ this.renderLocationList() } value={endLocation}  name="endLocation" onChange={this.changeHandler} placeholder='Select Loaction'/> */}
                <input type="text" className="form-control" name="endLocation" value={endLocation} onChange={this.changeHandler} placeholder="End Location" />
              </div>
              <div className="form-group">
                <label>Start Time:</label>
                {/* <Select options={ this.renderTimeList() } value={startTime}  name="startTime" onChange={this.changeHandler} placeholder='Select time'/> */}
                <input type="text" className="form-control" name="startTime" value={startTime} onChange={this.changeHandler} placeholder="Start Time" />
              </div>
              
              <button type="submit" className="btn btn-outline-primary findBtn">Find</button>
            </form>
            </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
