import './Tabs.css'

const TabCorrection = (props) => {

    return (
        <>
            <article className={props.active}>
                <h2>{ props.title }</h2>
                <p>{ props.content }</p>
            </article>
        </>
    )
}

export default TabCorrection