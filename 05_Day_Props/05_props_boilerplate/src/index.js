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

const showTime = (time) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const month = months[time.getMonth()]
    const year = time.getFullYear()
    const date = time.getDate()
    return `${date} ${month} ${year}`

}

const Header = (props) => (
    <header>
        <div className='header-wrapper'>
            <h1>{props.data.welcome}</h1>
            <h2>{props.data.title}</h2>
            <h3>{props.data.subtitle}</h3>
            <p>{props.data.author.firstName} {props.data.author.lastName}</p>
            <small>{showTime(props.data.date)}</small>
        </div>
    </header>
)

const Button = (props) => (
    <button onClick={props.onClick}>{props.text}</button>
)

const App = () => {

    const sayHi = () => {
        console.log('hi')
    }

    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
            firstName: 'James',
            lastName: 'Dean'
        },
        date: new Date()
    }

    let weight = '60.5'
    let currentYear = 2020
    let birthYear = 1992
    let age = currentYear - birthYear
    let status = (age >= 18)

    let skills=['HTML', 'CSS', 'JavaScript']

    return (
        <div className='app'>
            <Header data={data}/>
            <Age age={age}/>
            <Weight weight={weight}/>
            <Status status={status}/>
            <Skills skills={skills}/>
            <button onClick={sayHi}>Say Hi</button>

            <Button text='Say Hi 2!' onClick={() => alert('test')}/>
        </div>
    )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)