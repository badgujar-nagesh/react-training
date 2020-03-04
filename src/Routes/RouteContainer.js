import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Views/Home';
import DefaultParameter from '../Views/DefaultParameter'

function RouteContainer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Switch>
                        <Route path='/' component={Home} />
                        <Route path='/default-parameter' component={Home} />
                        <Route path='/template-literals' component={DefaultParameter} />
                        <Route path='/destructuring' component={DefaultParameter} />
                        <Route path='/object-literals' component={DefaultParameter} />
                        <Route path='/arrow-functions' component={DefaultParameter} />
                        <Route path='/promises' component={DefaultParameter} />
                        <Route path='/classes' component={DefaultParameter} />
                        <Route path='/functional-component' component={DefaultParameter} />
                        <Route path='/class-component' component={DefaultParameter} />
                        <Route path='/component-lifecycle' component={DefaultParameter} />
                        <Route path='/props' component={DefaultParameter} />
                        <Route path='/state' component={DefaultParameter} />
                        <Route path='/form-example' component={DefaultParameter} />
                        <Route path='/handling-events' component={DefaultParameter} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default RouteContainer;