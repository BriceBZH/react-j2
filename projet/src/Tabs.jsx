import Tab from './Tab.jsx'
import { useState } from 'react'

const Tabs = (props) => {
    const [state, setState] = useState('un');
    
    function switchClick()
    {
        if(state === "un")
            setState("un");
        else if(state === "deux")
            setState("deux");
        else
            setState("trois");
    }
    
    return (
        <>
            <button onClick={switchClick}>Voir plus</button>
            <button onClick={switchClick}>Voir plus</button>
            <button onClick={switchClick}>Voir plus</button>
            {
                state === 'un' && (
                    <Tab val = {state} />
                )
            }
            
            {
                state === 'deux' && (
                    <Tab val = {state} />
                )
            }
            
            {
                state === 'trois' && (
                    <Tab val = {state} />
                )
            }
            
        </>
    )
}

export default Tabs;