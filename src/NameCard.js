import React from 'react'

function NameCard(props){
    return (
        <div style={{backgroundColor: "orange"}}>
            <h2>Hi! I'm {props.name} Smurf, and I'm {props.age} years old.</h2>
            <p>My favorite color is {props.myObj.color}</p>
        </div>
    )
}

export default NameCard