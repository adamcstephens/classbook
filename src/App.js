import "./App.css"
import { WelcomeClass } from "./welcomeClass"
import { Counter } from "./counter"

const people = [
  {
    id: 0,
    name: "John",
    lastName: "Smith",
    morning: true,
  },
  {
    id: 1,
    name: "Michael",
    lastName: "Barber",
  },
  {
    id: 2,
    name: "Sally",
    lastName: "Turner",
  },
]

function App() {
  return (
    <div className="App">
      <WelcomeClass initialPeople={people} />
      {/* <Counter initialCount={0} /> */}
    </div>
  )
}

export default App
