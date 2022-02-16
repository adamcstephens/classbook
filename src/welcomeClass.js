import { DisplayName } from "./displayName"

export const WelcomeClass = ({ people }) => {
  return (
    <>
      {people.map((person, index) => (
        <DisplayName person={person} key={index} />
      ))}
    </>
  )
}
