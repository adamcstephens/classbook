import { Table } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

export const Classes = ({ classes }) => {
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
