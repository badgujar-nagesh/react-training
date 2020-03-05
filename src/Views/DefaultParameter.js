import React from 'react';

function DefaultParameter() {

    function thisIsDefaultParameterMethod(param = 'Default Parameter') {
        return param;
    }

    return (<>
        <h1>{thisIsDefaultParameterMethod()}</h1>

        <h1>{thisIsDefaultParameterMethod('Netwin Infosolutions')}</h1>
    </>);
}
export default DefaultParameter;