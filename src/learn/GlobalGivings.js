import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Loader from '../components/Loader'
import Tables from './Tables'
export class GlobalGivings extends Component {
    state = {
        projects: [], loading: false, stringdata: '',
        projects1: [], loading1: false,stringdata1: ''
    }
    callapi() {
        fetch('https://www.humanitarianresponse.info/api/v1.0/assessments')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        projects: result.data,
                        loading: false,
                    });
                    var x = JSON.stringify(this.state.projects);
                    this.setState({ stringdata: x });
                    console.log(this.state.stringdata)
                })
    }
    callapi1() {
        
        fetch('https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=bf80e61a-b1a3-48f5-92cb-3acd81c7e314')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({

                        projects1: result.data,
                        loading: false,
                    });
                    var x = JSON.stringify(this.state.projects1);
                    this.setState({ stringdata1: x });
                    console.log(this.state.stringdata1)
                })
                .catch(error => {
                   alert(error);
                })

    }
    constructor() {
        super();
        this.callapi = this.callapi.bind(this);
        this.callapi1 = this.callapi1.bind(this);
    }

    render() {

        return (
            <div>
                <Button onClick={this.callapi} style={{ textAlign: "left", display: "inline-block",fontSize:"12px", width: "215px", height: "65px" }} variant="success">
                    {this.state.loading ? <Loader style={{ textAlign: "center" }} /> : "Call other Api"}
                </Button>{' '}
                <Button onClick={this.callapi1} style={{ textAlign: "left", display: "inline-block",fontSize:"12px",  width: "215px", height: "65px" }} variant="success">
                    {this.state.loading1 ? <Loader style={{ textAlign: "center" }} /> : "Call Global Giving Api"}
                </Button>{' '}

                {this.state.loading1 ?null:<Tables data={this.state.projects} />}
            </div>
        )
    }
}


export default GlobalGivings
