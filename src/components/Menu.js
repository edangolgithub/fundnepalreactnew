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
import Register from './Register';
import Projects from './Projects';
import Learn from '../learn/Learn';
import Jq from '../learn/Jq';
import GlobalGivings from '../learn/GlobalGivings';
import NgoApi from './NgoApi';
import NgoForm from './NgoForm'
import Interest from '../Interest/Interest'
class MainMenu extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                // {
                //     label: 'Home',
                //     icon: 'pi pi-home',
                //     command: () => { window.location = "/" }
                // },
                // {
                //     label: 'Projects',
                //     icon: 'pi pi-info',
                //     // className: "p-menuitem-active",
                //     command: () => { window.location = "#/Projects" }
                // },
                
                // {
                //     label: 'Api',
                //     icon: 'pi pi-window-maximize',
                //     command: () => { window.location = "#/Api" }
                // },
                // {
                //     label: 'Themes',
                //     icon: 'pi pi-window-maximize',
                //     command: () => { window.location = "#/Register" }
                // },
                // {
                //     label: 'Non-Profit',
                //     icon: 'pi pi-window-maximize',
                //     command: () => { window.location = "#/a" }
                // }

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
                            <Route path="/Projects" component={Projects} />
                            <Route path="/about" component={About} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/Api" component={LambdaApi} />
                            <Route path="/Register" component={Register} />
                            <Route path="/l" component={Learn} />
                            <Route path="/jq" component={Jq} />
                            <Route path="/g" component={GlobalGivings} />
                            <Route path="/a" component={NgoApi} />
                            <Route path="/b" component={NgoForm} />
                            <Route path="/c" component={Interest} />
                        </Switch>
                    
                </div>
            </Router>
        );
    }
}

export default MainMenu;

