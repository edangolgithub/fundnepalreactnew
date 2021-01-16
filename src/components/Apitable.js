import React from 'react'

class Apitable extends React.Component{
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
                            {this.props.results.map(user => (
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

export default Apitable
