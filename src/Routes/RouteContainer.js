import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Views/Home';
import DefaultParameter from '../Views/DefaultParameter';
import TemplateLiteral from '../Views/TemplateLiteral';
import Destructuring from '../Views/Destructuring';
import ArrowFunction from '../Views/ArrowFunction';
import FunctionComponent from '../Views/FunctionComponent';
import ClassComponent from '../Views/ClassComponent';
import LifeCycle from '../Views/LifeCycle';
import Form from '../Views/Form';

function RouteContainer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Switch>
                        <Route path='/default-parameter' component={DefaultParameter} />
                        <Route path='/template-literals' component={TemplateLiteral} />
                        <Route path='/destructuring' component={Destructuring} />
                        <Route path='/arrow-functions' component={ArrowFunction} />
                        <Route path='/promises' component={ArrowFunction} />
                        <Route path='/classes' component={ArrowFunction} />
                        <Route path='/functional-component' component={FunctionComponent} />
                        <Route path='/class-component' component={ClassComponent} />
                        <Route path='/component-lifecycle' component={LifeCycle} />
                        <Route path='/props' component={ClassComponent} />
                        <Route path='/state' component={LifeCycle} />
                        <Route path='/form-example' component={Form} />
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default RouteContainer;