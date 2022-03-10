import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { ClassList } from "./routes/classList"
import { useEffect, useState } from "react"
import { RegisteredUsers } from "./routes/registeredUsers"
import { AddPerson } from "./addPerson"
import Container from "react-bootstrap/Container"
import { v4 as uuidv4 } from "uuid"
import { Route, Routes } from "react-router-dom"
import { AppNav } from "./appnav"
import { About } from "./routes/about"
import { Classes } from "./routes/classes"
import { Class } from "./routes/class"

function App() {
  const [people, setPeople] = useState(initialPeople)
  const [classes, setClasses] = useState([])

  useEffect(() => {
    setClasses([
      ...new Set(
        people.reduce((acc, person) => {
          if (person.classes) {
            return acc.concat(person.classes)
          }
          return acc
        }, [])
      ),
    ])
  }, [people])

  const toggleRegistered = (id) => {
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
    setPeople((currentPeople) => [...currentPeople, { name: first, lastName: last, id: getNewId(), classes: [] }])
  }
  const removePerson = (id) => {
    setPeople((currentPeople) => currentPeople.filter((person) => person.id !== id))
  }

  const addPersonClass = (id, newClass) => {
    setPeople((currentPeople) => {
      return currentPeople.map((person) => {
        let newClasses = []
        if (person.id === id) {
          if (!person.classes.length) {
            newClasses = [newClass]
          } else if (person.classes.includes(newClass)) {
            newClasses = person.classes
          } else {
            newClasses = [...person.classes, newClass]
          }
          return { ...person, classes: newClasses }
        }
        return person
      })
    })
  }

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<AppNav />}>
            <Route path="classes" element={<Classes classes={classes} />}>
              <Route path=":className" element={<Class people={people} />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="registered" element={<RegisteredUsers people={people} />} />
            <Route
              index
              element={
                <>
                  <AddPerson handleNewPerson={addPerson} />
                  <ClassList
                    people={people}
                    toggleRegistered={toggleRegistered}
                    removePerson={removePerson}
                    existingClasses={classes}
                    addPersonClass={addPersonClass}
                  />
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
