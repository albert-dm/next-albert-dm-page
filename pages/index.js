
import React from 'react'
import SkillsContainer from './components/cardContainer'
import skills from './api/skillsList'

const App = () => {
    return (
        <div>
            <SkillsContainer skills={skills}/>
        </div>
    )
}

export default App