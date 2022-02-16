import "./App.css"
import { WelcomeClass } from "./welcomeClass"

const people = [
  {
    name: "John",
    lastName: "Smith",
    morning: true,
  },
  {
    name: "Michael",
    lastName: "Barber",
  },
  {
    name: "Sally",
    lastName: "Turner",
  },
]

function App() {
  return (
    <div className="App">
      <WelcomeClass people={people} />
    </div>
  )
}

export default App
