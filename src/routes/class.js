import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Table } from "react-bootstrap"

export const Class = ({ people }) => {
  let { className } = useParams()
  let [currentClass, setCurrentClass] = useState([])

  useEffect(() => {
    setCurrentClass(people.filter((person) => person.classes && person.classes.includes(className)))
  }, [className, people])

  return (
    <>
      <h2>{className}</h2>
      <Table striped>
        <tbody>
          {currentClass.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.lastName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
