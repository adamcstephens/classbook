import { useState } from "react"

export function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  return (
    <>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  )
}
