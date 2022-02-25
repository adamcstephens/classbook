export const RegisteredUsers = ({ people }) => {
  return (
    <>
      <h1>Registered Users:</h1>
      {people.map((person, index) => {
        if (person.registered) {
          return <h3>{person.name}</h3>
        }
      })}
    </>
  )
}
