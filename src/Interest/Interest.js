import React, { Component } from 'react'
import "../components/style.css"
import { Account } from './Data'
import SAccount from './SelectedAccount'
export class Interest extends Component {

    state = {
        Organizations: Account, loading: false,
        selectedAccount: []
    }
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        if (event === 'undefined')
            return;
        var id = event.target.value;
        if (id === -1) {
            return;
        }
        this.setState({ selectedAccount: this.state.Organizations.find(a => a.accountid === id) });
        console.log(this.state.selectedAccount);
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-1-12">
                            <div className="form-group">
                                <label htmlFor="">Account</label>
                                <select defaultValue="-1" className="form-control" onChange={this.handleChange} name="" id="">
                                    <option >Choose...</option>
                                    {
                                        this.state.Organizations.map((ab, key) =>
                                            <option value={ab.accountid} key={key}>{ab.accountid}</option>
                                        )}
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-xs-1-12">
                            {
                                (() => {
                                    if (this.state.selectedAccount === 'undefined') {
                                        return <h1>nothng</h1>;

                                    }
                                    else {
                                        return <SAccount data={this.state.selectedAccount} />;
                                    }

                                }
                                )()}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Interest
