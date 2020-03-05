import React, { Component } from 'react';

class ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.developer = 'Sushil';
        this.getDeveloper();
        this.promise();
    }

    getDeveloper() {
        setTimeout(function() {
            console.log(this.developer);
        }, 100);
    }

    promise() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (<>
            <h1>This is Arrow function, Classes and Promise.</h1>
        </>);
    }
}
export default ArrowFunction;