import Table from "react-bootstrap/Table"

export const RegisteredUsers = ({ people }) => {
  if (
    people.filter((person) => {
      return person.registered
    }).length === 0
  ) {
    return (
      <>
        <h2>Registered Users</h2>
        <p>No registered users.</p>
      </>
    )
  }

  return (
    <>
      <h2>Registered Users</h2>
      <hr />
      <Table striped>
        <tbody>
          {people.map((person, index) => {
            if (person.registered) {
              return (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.lastName}</td>
                </tr>
              )
            }
            return <></>
          })}
        </tbody>
      </Table>
    </>
  )
}
