import React from 'react'
import ReactDOM from 'react-dom'

const Age = (props) => (<div>This person is {props.age} years old</div>)

const Weight = (props) => (
    <p>This person weighs {props.weight} kg</p>
)

const Status = (props) => {
    let status = props.status ? "This person can drive" : "This person can't drive"
        return status
}

const Skills = (props) => {
    let skills = props.skills.map((skill) => {return <li>{skill}</li>})
    return <ul>{skills}</ul>
}

const App = () => {
    let weight = '60.5'
    let currentYear = 2020
    let birthYear = 1992
    let age = currentYear - birthYear
    let status = (age >= 18)

    let skills=['HTML', 'CSS', 'JavaScript']

    return (
        <div className='app'>
            <Age age={age}/>
            <Weight weight={weight}/>
            <Status status={status}/>
            <Skills skills={skills}/>
        </div>
    )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)