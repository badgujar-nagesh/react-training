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
                                    <li><Link to="/default-parameter" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Default Parameter</Link></li>
                                    <li><Link to="/template-literals" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Template Literals</Link></li>
                                    <li><Link to="/destructuring" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Destructuring</Link></li>
                                    <li><Link to="/arrow-functions" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Arrow Functions</Link></li>
                                    <li><Link to="/promises" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Promises</Link></li>
                                    <li><Link to="/classes" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Classes</Link></li>
                                </ul>
                            </li>
                            <li className="col-sm-4">
                                <ul>
                                    <li className="dropdown-header">Components</li>
                                    <li><Link to="/functional-component" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Functional Component</Link></li>
                                    <li><Link to="/class-component" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Class Component</Link></li>
                                    <li><Link to="/component-lifecycle" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Lifecycle</Link></li>
                                    <li><Link to="/props" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Props</Link></li>
                                    <li><Link to="/state" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>State</Link></li>
                                </ul>
                            </li>
                            <li className="col-sm-4">
                                <ul>
                                    <li className="dropdown-header">Forms</li>
                                    <li><Link to="/form-example" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>Basic example</Link></li>
                                    <li><Link to="/list-example" onClick={() => this.setState({navCollapsed: !this.state.navCollapsed})}>List</Link></li>
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