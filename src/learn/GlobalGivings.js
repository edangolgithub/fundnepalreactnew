import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Loader from '../components/Loader'
export class GlobalGivings extends Component {
    state = {
        projects: [], loading: false
    }
    callapi()
    {
        fetch('https://api.globalgiving.org/api/public/projectservice/themes?api_key=658137f6-ecaa-4587-8701-cc692cb9b153')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({

                    items: result,
                    loading: false
                });
            })
    }
    constructor()
    {
        super();
        this.callapi=this.callapi.bind(this);
    }
    
    render() {
       
        return (
            <div>
                 <Button onClick={this.callapi} style={{textAlign:"left",display:"block",width:"215px",height:"65px"}} variant="success">
                    {this.state.loading ? <Loader style={{textAlign:"center"}} />:"Call Api" }
                        </Button>{' '}
    
           {this.state.loading ? null : this.state.projects} 
            </div>
        )
    }
}


export default GlobalGivings
