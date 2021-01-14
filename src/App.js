import { withAuthenticator } from '@aws-amplify/ui-react';

import './App.css';

import Navfundnepal from './components/Navfundnepal'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navfundnepal />
        <h1>Fund Nepal 2021</h1>

        <h2>My App Content</h2>
      </header>



    </div>
  );
}

export default withAuthenticator(App);
