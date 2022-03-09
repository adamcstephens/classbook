import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { WelcomeClass } from "./welcomeClass"
import { useState } from "react"
import { RegisteredUsers } from "./registeredUsers"
import { AddPerson } from "./addPerson"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import { v4 as uuidv4 } from "uuid"
import { Route, Routes } from "react-router-dom"
import { AppNav } from "./appnav"
import { About } from "./routes/about"
import { Classes } from "./routes/classes"
import { Class } from "./routes/class"

const initialPeople = [
  {
    id: 0,
    name: "John",
    lastName: "Smith",
    classes: ["Modern Web App"],
  },
  {
    id: 1,
    name: "Michael",
    lastName: "Barber",
    classes: ["Creative Coding"],
  },
  {
    id: 2,
    name: "Sally",
    lastName: "Turner",
    classes: ["Modern Web App", "Interdisciplinary Projects"],
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
        <Routes>
          <Route path="/" element={<AppNav />}>
            <Route path="classes" element={<Classes people={people} />}>
              <Route path=":className" element={<Class people={people} />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="registered" element={<RegisteredUsers people={people} />} />
            <Route
              index
              element={
                <>
                  <AddPerson handleNewPerson={addPerson} />
                  <WelcomeClass people={people} toggleRegistered={toggleRegistered} removePerson={removePerson} />
                </>
              }
            />
          </Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
