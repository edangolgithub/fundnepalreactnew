import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Loader from './Loader'
import Apitable from './Apitable'
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify  from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

class LambdaApi extends Component {
    constructor() {
        super();
        this.callapi = this.callapi.bind(this)
    }
    state = {
        items: [], loading: false
    }

    callapi() {
        this.setState({ loading: true })
        fetch('https://facj4p3t6k.execute-api.us-east-1.amazonaws.com/Prod')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({

                        items: result,
                        loading: false
                    });
                })

    }


    render() {
        return (
            <div>
                {this.state.loading ? <Loader /> : <Apitable results={this.state.items} />}
                <Button onClick={this.callapi} variant="success">Get Api Data</Button>{' '}

            </div>
        )
    }
}

export default LambdaApi;
