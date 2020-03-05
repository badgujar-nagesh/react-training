import React from 'react';

function FunctionComponent(props) {
    let { madeIn } = props;

    return (<>
        <h3>Facebook is made in {madeIn}</h3>
    </>);
}
export default FunctionComponent;