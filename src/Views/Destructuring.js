import React from 'react';

function Destructuring() {

    var socials = {facebook: 'Facebook', instagram: 'Instagram', twitter: 'Twitter'};
    var inventors = ["Mark", "Kevin", "Jack"];

    function getFacebook() {
        let { facebook } = socials;
        return facebook;
    }

    function getInventors() {
        var [ faceBookInventor ] = inventors;
        return faceBookInventor;
    }

    return (<>
        <h1>{getFacebook()}</h1>
        <h3>{getInventors()}</h3>
    </>);
}
export default Destructuring;