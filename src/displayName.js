export const DisplayName = ({ person, toggleRegistered }) => {
  return (
    <tr>
      <td>
        {person.name} {person.lastName}
      </td>
      <td>
        <button onClick={() => toggleRegistered(person.id)}>{person.registered ? "Unregister" : "Register"}</button>
      </td>
    </tr>
  )
}
