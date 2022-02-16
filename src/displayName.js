export const DisplayName = ({ person: { name, lastName, morning } }) => {
  return (
    <h2>
      {morning ? "Good morning" : "Hello"}, {name} {lastName}!
    </h2>
  )
}
