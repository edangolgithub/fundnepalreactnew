import React, { Component } from 'react'

export class LambdaApi extends Component {

    componentDidMount()
    {
        getdata();
    }
 getdata() {
    fetch('https://api.github.com/users/hacktivist123/repos')
        .then(response => response.json())
        .then(data => this.setState({users:data}));

}
render() {
    return (
        <div>
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
                        {contacts.map((contact) => (
                            <tr>
                                <td>users.</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
}

export default LambdaApi
