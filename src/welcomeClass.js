import { DisplayName } from "./displayName"
import Table from "react-bootstrap/Table"

export const WelcomeClass = ({ people, toggleRegistered, removePerson }) => {
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
      <Table striped>
        <tbody>
          {people.map((person) => (
            <DisplayName
              person={person}
              toggleRegistered={toggleRegistered}
              removePerson={removePerson}
              key={person.id}
            />
          ))}
        </tbody>
      </Table>
    </>
  )
}
