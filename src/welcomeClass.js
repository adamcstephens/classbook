import { DisplayName } from "./displayName"
import { useState } from "react"

export const WelcomeClass = ({ initialPeople }) => {
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

  return (
    <>
      {people.map((person) => (
        <DisplayName person={person} toggleRegistered={toggleRegistered} key={person.id} />
      ))}
    </>
  )
}
