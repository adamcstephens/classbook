import Button from "react-bootstrap/Button"

export const DisplayName = ({ person, toggleRegistered, removePerson }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.lastName}</td>
      <td>
        <Button onClick={() => toggleRegistered(person.id)} variant={person.registered ? "warning" : "primary"}>
          {person.registered ? "Unregister" : "Register"}
        </Button>
      </td>
      <td>
        <Button onClick={() => removePerson(person.id)} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  )
}
