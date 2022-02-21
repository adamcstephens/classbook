export const DisplayName = ({ person, toggleRegistered, removePerson }) => {
  return (
    <tr>
      <td>
        {person.name} {person.lastName}
      </td>
      <td>
        <button onClick={() => toggleRegistered(person.id)}>{person.registered ? "Unregister" : "Register"}</button>
        <button onClick={() => removePerson(person.id)}>Delete</button>
      </td>
    </tr>
  )
}
