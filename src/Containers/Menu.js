import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
    state = {
        navCollapsed: false
    }
  
    _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }
  
    render () {
        const {navCollapsed} = this.state
  
        return (<>
        <nav className="navbar navbar-default navbar-static" style={{border: 'none'}}>
            <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">React Training</Link>
            </div>
            
            
            <div className="collapse navbar-collapse js-navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className={`dropdown dropdown-large ${navCollapsed? 'open': ''}`}>
                        <Link to="#" className="dropdown-toggle title" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Menu <b className="caret"></b></Link>
                        
                        <ul className="dropdown-menu dropdown-menu-large row">
                            <li className="col-sm-4">
                                <ul>
                                    <li className="dropdown-header">JS with ES6</li>
                                    <li><Link to="/default-parameter">Default Parameter</Link></li>
                                    <li><Link to="/template-literals">Template Literals</Link></li>
                                    <li><Link to="/destructuring">Destructuring</Link></li>
                                    <li><Link to="/object-literals">Object Literals</Link></li>
                                    <li><Link to="/arrow-functions">Arrow Functions</Link></li>
                                    <li><Link to="/promises">Promises</Link></li>
                                    <li><Link to="/classes">Classes</Link></li>
                                </ul>
                            </li>
                            <li className="col-sm-4">
                                <ul>
                                    <li className="dropdown-header">Components</li>
                                    <li><Link to="/functional-component">Functional Component</Link></li>
                                    <li><Link to="/class-component">Class Component</Link></li>
                                    <li><Link to="/component-lifecycle">Lifecycle</Link></li>
                                    <li><Link to="/props">Props</Link></li>
                                    <li><Link to="/state">State</Link></li>
                                </ul>
                            </li>
                            <li className="col-sm-4">
                                <ul>
                                    <li className="dropdown-header">Forms</li>
                                    <li><Link to="/form-example">Basic example</Link></li>
                                    <li><Link to="/handling-events">Handling Events</Link></li>
                                </ul>
                            </li>
                        </ul>
                        
                    </li>
                </ul>
                
            </div>
        </nav>

        </>)
    }
}
export default Menu;