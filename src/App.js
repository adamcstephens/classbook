import "./App.css"
import { WelcomeClass } from "./welcomeClass"
import { Counter } from "./counter"
import { useState } from "react"

const initialPeople = [
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
  const [people, setPeople] = useState(initialPeople)
  const [newPerson, setNewPerson] = useState("")

  const toggleRegistered = (id) => {
    console.log("Changing " + id)

    setPeople((currentPeople) => {
      return currentPeople.map((person) => {
        if (person.id === id) {
          return { ...person, registered: !person.registered }
        }
        return person
      })
    })
  }

  const findNextId = () => {
    return people.length
  }

  const submit = (e) => {
    e.preventDefault()
    addPerson(newPerson)
    setNewPerson("")
  }
  const addPerson = (name) => {
    const [first, last] = name.split(" ")
    setPeople((currentPeople) => [...currentPeople, { name: first, lastName: last, id: findNextId() }])
  }
  const removePerson = (id) => {
    setPeople((currentPeople) => currentPeople.filter((_, index) => index != id))
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          value={newPerson}
          onChange={(event) => setNewPerson(event.target.value)}
          type="text"
          placeholder="New person..."
          required
        />
        <button>Add</button>
      </form>
      <WelcomeClass people={people} toggleRegistered={toggleRegistered} removePerson={removePerson} />
      {/* <Counter initialCount={0} /> */}
    </div>
  )
}

export default App
