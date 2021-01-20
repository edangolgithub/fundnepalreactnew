import React, { Component } from 'react'
import axios from 'axios'
import AccountList from "./AccountList"
import SelectedAccount from "./SelectedAccount";
import Transaction from "./Transactions";
export class Interestmain extends Component {
    state = {
        accounts: [],
        accountids: [],
        selectedaccount: [],
        transaction: []
    };
    getaccounts() {
        axios.get('http://localhost:3333/accounts')
            .then(data => {
                const d = data.data;
                // console.log(d);
                // console.log(data)
                this.setState({ accounts: d })
                this.setState({ accountids: d.map(x => x.accountid) })
                //console.log(this.state.accountids)
            })
    }
    postaccounts(data) {
        axios.post('http://localhost:3333/accounts', data)
    }
    componentDidMount() {
        this.getaccounts();
    }
    onselectchange(acid) {
        // console.log(this.state.accounts);        
        var selectedaccount = this.state.accounts.find(a => a.accountid === acid);
        this.setState({ selectedaccount: selectedaccount })
    }

    onselectaccounttype(actype) {
        alert(actype);
    }
    constructor() {
        super();
        this.onselectchange = this.onselectchange.bind(this)
        this.onselectaccounttype = this.onselectaccounttype.bind(this)
    }
    render() {
        return (
            <div>
                <AccountList onselectchange={this.onselectchange} data={this.state.accountids} />

                {this.state.selectedaccount ?
                    <div class="container">
                        <div className="row">
                            <div className="col-3">
                                <SelectedAccount onselectaccounttype={this.onselectaccounttype} data={this.state.selectedaccount} />
                            </div>
                            <div className="col-9" style={{ float: "right", width: "200px" }} >
                                <Transaction />
                            </div>
                        </div>
                    </div>
                    :
                    <h1>nothing</h1>
                }
            </div>
        )
    }
}

export default Interestmain
