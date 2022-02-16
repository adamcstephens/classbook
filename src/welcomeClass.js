import { DisplayName } from "./displayName"

export const WelcomeClass = ({ initialPeople }) => {
  return (
    <>
      {initialPeople.map((person) => (
        <DisplayName person={person} key={person.id} />
      ))}
    </>
  )
}
