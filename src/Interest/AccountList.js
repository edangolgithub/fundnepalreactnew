import React, { Component } from 'react'

export class AccountList extends Component {
    constructor()
    {
        super();
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange(event)
    {
        this.props.onselectchange(event.target.value);       
    }
    render() {
        return (
            <div>
                <div class="container m-1 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Accounts</label>
                    <select className="form-control" onChange={this.handlechange} >
                        {
                            this.props.data.map((ac, k) =>
                                <option value={ac} key={k}>{ac}</option>
                            )
                        }
                    </select>
                </div>
                </div>
                
            </div>
        )
    }
}

export default AccountList
