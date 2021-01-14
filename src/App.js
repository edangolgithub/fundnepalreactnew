import { withAuthenticator } from '@aws-amplify/ui-react';

import './App.css';

import Navfundnepal from './components/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navfundnepal />
       
        <Footer />
      </header>



    </div>
  );
}

export default withAuthenticator(App);
