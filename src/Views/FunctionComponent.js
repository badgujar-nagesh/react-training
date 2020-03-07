import React from 'react';

function FunctionComponent(props) {
    let { madeIn } = props;

    return (<>
        {madeIn? <h3>Facebook is made in {madeIn}</h3>:
        <h1>This is Functional Component</h1>}
    </>);
}
export default FunctionComponent;