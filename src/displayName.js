import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { AutoComplete } from "./autocomplete"
import ListGroup from "react-bootstrap/ListGroup"

export const DisplayName = ({ person, toggleRegistered, removePerson, existingClasses, addPersonClass }) => {
  const autocompleteSubmit = (newClass) => {
    addPersonClass(person.id, newClass)
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {person.name} {person.lastName}
        </Card.Title>
      </Card.Body>
      <Card>
        <Card.Header>Classes</Card.Header>
        <Card.Body>
          <AutoComplete suggestions={existingClasses} onSubmitUpdate={autocompleteSubmit} />
        </Card.Body>
        <ListGroup>
          {person.classes.map((cl, index) => {
            return <ListGroup.Item key={index}>{cl}</ListGroup.Item>
          })}
        </ListGroup>
      </Card>
      <Card>
        <Card.Header>Manage</Card.Header>
        <Card.Body>
          <Button onClick={() => toggleRegistered(person.id)} variant={person.registered ? "warning" : "primary"}>
            {person.registered ? "Unregister" : "Register"}
          </Button>
          <Button onClick={() => removePerson(person.id)} variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Card>
  )
}
