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
import api from "./api"

function App() {
  const [people, setPeople] = useState([])
  const [classes, setClasses] = useState([])

  // get initial data from api on startup
  useEffect(() => {
    api.get("/people").then((response) => {
      setPeople(response.data)
    })
  }, [])

  // update list of classes
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

  const toggleRegistered = async (id) => {
    const currentPerson = people.filter((person) => person.id === id)[0]
    const resp = await api.put(`/people/${id}`, { ...currentPerson, registered: !currentPerson.registered })

    if (resp.status !== 200) {
      throw new Error(`Failed to update user id ${id}`)
    } else {
      setPeople((currentPeople) => {
        return currentPeople.map((person) => {
          if (person.id === id) {
            return resp.data
          }
          return person
        })
      })
    }
  }

  const getNewId = () => {
    return uuidv4()
  }

  const addPerson = async (name) => {
    const [first, last] = name.split(" ")
    const newPerson = { name: first, lastName: last, id: getNewId(), classes: [] }
    const resp = await api.post(`/people/`, newPerson)

    if (resp.status !== 201) {
      throw new Error(`Failed to create user ${newPerson}`)
    } else {
      setPeople((currentPeople) => [...currentPeople, resp.data])
    }
  }
  const removePerson = async (id) => {
    const resp = await api.delete(`/people/${id}`)

    if (resp.status !== 200) {
      throw new Error(`Failed to delete user id ${id}`)
    } else {
      setPeople((currentPeople) => currentPeople.filter((person) => person.id !== id))
    }
  }

  const addPersonClass = async (id, newClass) => {
    const currentPerson = people.filter((person) => person.id === id)[0]
    let newClasses = []
    if (!currentPerson.classes || !currentPerson.classes.length) {
      newClasses = [newClass]
    } else if (currentPerson.classes.includes(newClass)) {
      newClasses = currentPerson.classes
    } else {
      newClasses = [...currentPerson.classes, newClass]
    }

    const resp = await api.put(`/people/${id}`, { ...currentPerson, classes: newClasses })

    if (resp.status !== 200) {
      throw new Error(`Failed to update user id ${id}`)
    } else {
      setPeople((currentPeople) => {
        return currentPeople.map((person) => {
          if (person.id === id) {
            return resp.data
          }
          return person
        })
      })
    }
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
