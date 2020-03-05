import React from 'react';

function TemplateLiteral() {

    var sachin = 'Sachin Tendulkar';
    var virat = 'Virat Kohli';

    function templateLiteralMethod(name) {
        return `My Name is ${name}`;
    }

    function longString() {
        return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. `;
    }

    return (<>
        <h1>{templateLiteralMethod(sachin)}</h1>

        <h1>{templateLiteralMethod(virat)}</h1>

        <p>{longString()}</p>
    </>);
}
export default TemplateLiteral;