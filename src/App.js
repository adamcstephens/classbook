import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { WelcomeClass } from "./welcomeClass"
import { useState } from "react"
import { RegisteredUsers } from "./registeredUsers"
import { AddPerson } from "./addPerson"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import { v4 as uuidv4 } from "uuid"

const initialPeople = [
  {
    id: 0,
    name: "John",
    lastName: "Smith",
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

  const getNewId = () => {
    return uuidv4()
  }

  const addPerson = (name) => {
    const [first, last] = name.split(" ")
    setPeople((currentPeople) => [...currentPeople, { name: first, lastName: last, id: getNewId() }])
  }
  const removePerson = (id) => {
    setPeople((currentPeople) => currentPeople.filter((person) => person.id !== id))
  }

  return (
    <>
      <Container>
        <Stack gap={3}>
          <AddPerson handleNewPerson={addPerson} />
          <WelcomeClass people={people} toggleRegistered={toggleRegistered} removePerson={removePerson} />
          <RegisteredUsers people={people} />
        </Stack>
      </Container>
    </>
  )
}

export default App
