import { DisplayName } from "./displayName"

export const WelcomeClass = ({ people, toggleRegistered, removePerson, existingClasses, addPersonClass }) => {
  if (people.length === 0) {
    return (
      <>
        <h2>Class Roster</h2>
        <p>No people in class.</p>
      </>
    )
  }
  return (
    <>
      <h2>Class Roster</h2>
      {people.map((person) => (
        <DisplayName
          person={person}
          toggleRegistered={toggleRegistered}
          removePerson={removePerson}
          existingClasses={existingClasses}
          addPersonClass={addPersonClass}
          key={person.id}
        />
      ))}
    </>
  )
}
