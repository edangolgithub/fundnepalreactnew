import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);



class  Eauth extends React.Component {
    render() {
        return (
            <div>
                <AmplifySignOut />
            </div>
        )
    }
}

export default withAuthenticator(Eauth);
