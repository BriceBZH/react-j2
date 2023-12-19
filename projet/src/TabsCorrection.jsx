import './Tabs.css'
import { useState } from 'react'
import TabCorrection from "./TabCorrection.jsx";

function TabsCorrection() {
    const [state, setState] = useState({activeTab : 1});

    function switchTab(tab)
    {
        if(state.activeTab !== tab)
        {
            setState({activeTab: tab});
        }
    }

    return (
        <>
            <section>
                <menu>
                    <button onClick={() => switchTab(1)}>Tab 1</button>
                    <button onClick={() => switchTab(2)}>Tab 2</button>
                    <button onClick={() => switchTab(3)}>Tab 3</button>
                </menu>
                {
                    state.activeTab === 1 && (
                        <>
                            <TabCorrection active="active" title="Titre de l'onglet 1" content="Contenu de l'onglet 1"/>
                            <TabCorrection title="Titre de l'onglet 2" content="Contenu de l'onglet 2"/>
                            <TabCorrection title="Titre de l'onglet 3" content="Contenu de l'onglet 3"/>
                        </>

                    )
                }
                {
                    state.activeTab === 2 && (
                        <>
                            <TabCorrection title="Titre de l'onglet 1" content="Contenu de l'onglet 1"/>
                            <TabCorrection active="active" title="Titre de l'onglet 2" content="Contenu de l'onglet 2"/>
                            <TabCorrection title="Titre de l'onglet 3" content="Contenu de l'onglet 3"/>
                        </>

                    )
                }
                {
                    state.activeTab === 3 && (
                        <>
                            <TabCorrection title="Titre de l'onglet 1" content="Contenu de l'onglet 1"/>
                            <TabCorrection title="Titre de l'onglet 2" content="Contenu de l'onglet 2"/>
                            <TabCorrection active="active" title="Titre de l'onglet 3" content="Contenu de l'onglet 3"/>
                        </>

                    )
                }

            </section>
        </>
    )
}

export default TabsCorrection