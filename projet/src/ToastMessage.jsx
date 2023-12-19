import { useState } from 'react'
import './ToastMessage.css'

const ToastMessage = (props) => {
    const [state, setState] = useState('on');

    function dismiss()
    {
        if(state === "on")
            setState("off");
        else
            setState("on");
    }

    return (
        <>
            <article className="toastMessage">
                {
                    state === 'on' && (
                        <p>
                             Ceci est le texte de mon message
                        </p>
                    )
                }
                <button onClick={dismiss}>X</button>
            </article>
            
        </>
    )
}

export default ToastMessage;