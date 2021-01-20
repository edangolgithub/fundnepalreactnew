import React, { Component } from 'react'

export class SelectedAccount extends Component {
    constructor()
    {
        super();
        this.handleaccounttype=this.handleaccounttype.bind(this);
    }
    handleaccounttype(event)
    {
       this.props.onselectaccounttype(event.target.value);
    }
    render() {
        if (typeof (this.props.data) === "undefined" || this.props.data === null) {
            return (<div>h</div>);
        }
       const data=this.props.data;
        return (
                 <div className="row">
                        <div className="col">
                            <h6>Account details</h6>
                            <div className="cahrd">
                                <div className="card-body adetails">
                                    <div>Name : {data.name}</div>
                                    <div>Phone : {data.phone}</div>
                                    <div>address : {data.address}</div>
                                    <div>email : {data.phone}</div>
                                </div>
                            </div>
                            { this.props.data.accounttype &&
                            <div className="card">
                                <div className="card-body">
                                    
                                    <select className="custom-select my-1 mr-sm-2" onChange={this.handleaccounttype} >
                                        <option >accounttype...</option>
                                        {
                                           
                                                this.props.data.accounttype.map(t =>
                                                    <option key={t} value={t}>{t}</option>
                                                )
                                        }
                                    </select>
                                   
                                </div>
                            </div>
                             }
                        </div>
                      
                    </div>              
        )
    }
}

export default SelectedAccount
