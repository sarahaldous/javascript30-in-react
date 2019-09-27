import React from 'react'
import Drumkit from '././projects/01-drum-kit/01-drum-kit.js'
import NameCard from './NameCard.js'
import './style.css'

function App(){

    const obj = {
        color: "blue"
    }

    const styles = {
        color1: "blue",
        color2: "green",
        color3: "crimson",
        color4: "purple",
        color5: "magenta"
    }
   
    return (
        <div>
            {/* <h1  */}
            {/* // <NameCard style="blue" name="Papa" age={29} myObj={obj}/>
            // // <NameCard  style="purple"  name="Silly" age={5} myObj={obj}/>
            // // <NameCard  style="crimson"  name="Snarky" age={15} myObj={obj}/>  */}
            <NameCard style={styles.color1} name="Papa" age={29} myObj={obj}/>
            // <NameCard  style={styles.color3}  name="Silly" age={5} myObj={obj}/>
            // <NameCard  style={styles.color4}  name="Snarky" age={15} myObj={obj}/> 
        </div>

        // <Drumkit />
    )
}
export default App