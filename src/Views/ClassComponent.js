import React, { Component } from 'react';
import FunctionComponent from './FunctionComponent';

class ClassComponent extends Component {

    render() {
        return (<>
            <h1> This is Class Component! </h1>
            <FunctionComponent madeIn={'USA'} />
        </>)
    }
}

export default ClassComponent;