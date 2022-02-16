export const DisplayName = ({ person }) => {
  return (
    <h2>
      {person.morning ? "Good morning" : "Hello"}, {person.name} {person.lastName}!
    </h2>
  )
}
