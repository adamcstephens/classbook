import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useState } from "react"

export const AddPerson = ({ handleNewPerson }) => {
  const [newPerson, setNewPerson] = useState("")

  const defaultPlaceholder = "New person..."

  const submit = (e) => {
    e.preventDefault()
    handleNewPerson(newPerson)
    setNewPerson("")
  }

  return (
    <>
      <h2>Add Person</h2>
      <Form onSubmit={submit}>
        <Row>
          <Col sm={8}>
            <Form.Control
              placeholder={defaultPlaceholder}
              onChange={(event) => setNewPerson(event.target.value)}
              value={newPerson}
            />
          </Col>
          <Col sm={4}>
            <Button type="submit">Add</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
