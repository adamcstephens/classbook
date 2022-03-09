import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

export const Classes = ({ people }) => {
  let [classes, setClasses] = useState([])

  useEffect(() => {
    setClasses([
      ...new Set(
        people.reduce((acc, person) => {
          if (person.classes) {
            return acc.concat(person.classes)
          }
          return acc
        }, [])
      ),
    ])
  }, [people])

  return (
    <>
      <h2>Class Roster</h2>
      <Table striped>
        <tbody>
          {classes.map((cl, index) => (
            <tr key={index}>
              <td>
                <Link to={cl}>{cl}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Outlet />
    </>
  )
}
