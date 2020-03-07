import React, {Component} from 'react';

class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "This is Initial State"
        };
    }

    componentDidMount() {
        console.log('Component Did Mount');
        this.setState({name: 'This is State Updated!'});
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState)
        console.log('Component Updated');
    }

    componentWillUnmount() {
        console.log('Component Unmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        let { name } = this.state;
        return (
            <h1>
                {name}
            </h1>
        );
    }    
}

export default LifeCycle;