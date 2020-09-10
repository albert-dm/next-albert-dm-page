
import React from 'react'
import CardContainer from './components/cardContainer'
import Body from './components/body'
import clients from './api/clientsList'

const App = () => {
    return (
        <div>
            <Body/>
            <CardContainer clients={clients}/>
        </div>
    )
}

export default App