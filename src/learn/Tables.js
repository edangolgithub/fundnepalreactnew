import React, { Component } from 'react'

export class Tables extends Component {
    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-sm table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Project</th>                               
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.label}</td>

                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Tables
