
const Part = (props) => {
console.log(props)
  return (
    <div>
      <p>{props.part}</p>
      <p>{props.exercises}</p>
    </div>
  )
}

const Header = (props) => {

  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0].name} exercises={props.part[0].exercises} />
      <Part part={props.part[1].name} exercises={props.part[1].exercises} />
      <Part part={props.part[2].name} exercises={props.part[2].exercises} />
    </>
  )
}

const Total = (props) => {
console.log(props)
  return (
    <div>
      <p>Number of Excercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />

    </div>
  )
}

export default App
