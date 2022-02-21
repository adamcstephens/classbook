import { DisplayName } from "./displayName"
import { useState } from "react"

export const WelcomeClass = ({ people, toggleRegistered, removePerson }) => {
  return (
    <>
      {people.map((person) => (
        <DisplayName person={person} toggleRegistered={toggleRegistered} removePerson={removePerson} key={person.id} />
      ))}
    </>
  )
}
