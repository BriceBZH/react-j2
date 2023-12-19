import { useState } from 'react'

const ReadMore = (props) => {
    const [state, setState] = useState('on');

    function toggleOpen()
    {
        if(state === "on")
            setState("off");
        else
            setState("on");
    }

    return (
        <>
            <article>
                <header>
                    <h2>
                        Le titre de l'article
                    </h2>
                </header>
                {
                    state === 'on' && (
                        <section>
                        Le corps de l'article
                        </section>
                    )
                }
                <footer>
                    {
                        state === 'on' && (
                            <button onClick={toggleOpen}>Voir moins</button>
                        )
                    }
                    
                    {
                        state === 'off' && (
                            <button onClick={toggleOpen}>Voir plus</button>
                        )
                    }
                    
                </footer>
            </article>
        </>
    )
}

export default ReadMore;