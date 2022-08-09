import React from "react";

// function Greet() {
//     return <h1>Hello Chaiti!</h1>
// }

//Arrow Function Instead

const Greet = props => {
    const {name} = props
    return (
        <>
            <h1 className="title">Hellow {name}!</h1>
            {props.children}
        </>
    )
}

export default Greet;
