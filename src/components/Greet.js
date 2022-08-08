import React from "react";

// function Greet() {
//     return <h1>Hello Chaiti!</h1>
// }

//Arrow Function Instead

const Greet = (props) => {
    console.log(props)
    return (
        <>
            <h1 className="title">Hello {props.name}!</h1>
            {props.children}
        </>
    )
}

export default Greet;
