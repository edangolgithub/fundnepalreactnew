import React, { Component } from 'react';

import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import { Sidebar } from 'primereact/sidebar';
// import { Menu } from 'primereact/menu';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Menubar } from 'primereact/components/menubar/Menubar';

import Home from './Home';
import About from './AboutUs';
import LambdaApi from './LambdaApi';

import Contact from './ContactUs';

class MainMenu extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    command: () => { window.location = "#/" }
                },
                {
                    label: 'About',
                    icon: 'pi pi-info',
                    className: "p-menuitem-active",
                    command: () => { window.location = "#/about" }
                },
                {
                    label: 'Contact',
                    icon: 'pi pi-power-off',
                    command: () => { window.location = "#/Contact" }
                },
                {
                    label: 'Api',
                    icon: 'pi pi-window-maximize',
                    command: () => { window.location = "#/Api" }
                }

            ]
        };
    }

    render() {
        return (
            <Router>
                <div>
                  <div style={{textAlign:'left'}} className="card">
                        <Menubar  model={this.state.items}  />
                    </div>
                     <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/Api" component={LambdaApi} />
                        </Switch>
                    
                </div>
            </Router>
        );
    }
}

export default MainMenu;

