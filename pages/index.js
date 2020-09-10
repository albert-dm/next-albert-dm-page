
import React from 'react'
import SkillsContainer from './components/cardContainer'
import Header from './components/header'
import skills from './api/skillsList'

const App = () => {
    return (
        <div>
            <Header/>
            <SkillsContainer skills={skills}/>
        </div>
    )
}

export default App