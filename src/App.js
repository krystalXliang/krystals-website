import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { About } from './About';
import { Projects } from './Projects';
import { BucketList } from './BucketList';
import { Homepage } from './Homepage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="container">
        {/* <Navbar color="light" light expand="md">
                <NavbarBrand href="/Hompage">Home</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                </Nav>
        </Navbar> */}
          <Link to="/">Home</Link>
          { ' ' }
          <Link to="/about">About</Link>
          { ' ' }
          <Link to="/projects">Projects</Link>
          { ' ' }
          <Link to="/bucketlist">Bucketlist</Link>
          <div className= 'homepg'>
            <Route exact path="/" component={ Homepage } />
          </div>
          <Route path="/about" component={ About } />
          <Route path="/projects" component={ Projects } />
          <Route path="/bucketlist" component={ BucketList } />
        </div>
      </Router>
      <footer className="footer">
        <p>© 2018 Krystal Liang All Rights Reserved</p>
      </footer>
      </div>
    );
  }
}

export default App;
