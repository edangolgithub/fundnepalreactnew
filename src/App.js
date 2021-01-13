import {  withAuthenticator } from '@aws-amplify/ui-react';

import './App.css';
import  Eauth  from "./Authentication/Eauth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fund Nepal 2021</h1>
       <Eauth className="a" />
        <h2>My App Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
