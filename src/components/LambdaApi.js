import React, { Component } from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

class LambdaApi extends Component {
    
        state = {
            items: []
        }
    
   
    componentDidMount()
    {
        fetch('https://facj4p3t6k.execute-api.us-east-1.amazonaws.com/Prod')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              
              items: result
            });
          })
    }
        
          
render() {
    return (
        <div>
            <AmplifySignOut />
            <div className="table-responsive">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>                       
                        {this.state.items.map(user => (
                            <tr>
                                <td>{user.Id}</td>
                                <td>{user.Name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
}

export default withAuthenticator(LambdaApi);
