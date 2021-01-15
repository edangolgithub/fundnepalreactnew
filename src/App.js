//import { withAuthenticator } from '@aws-amplify/ui-react';

import './App.css';

import Menu from './components/Menu'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        
        <Footer />
      </header>



    </div>
  );
}

export default App;
