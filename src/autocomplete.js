import { useState } from "react"
import "./autocomplete.css"

export const AutoComplete = ({ suggestions, onSubmitUpdate }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [textInput, setInput] = useState("")

  const onChange = (e) => {
    const userInput = e.target.value

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter((suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1)

    setInput(e.target.value)
    setFilteredSuggestions(unLinked)
    setActiveSuggestionIndex(0)
    setShowSuggestions(true)
  }

  const onClick = (e) => {
    setFilteredSuggestions([])
    setInput(e.target.innerText)
    setActiveSuggestionIndex(0)
    setShowSuggestions(false)
  }

  const onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setInput((typedInput) => {
        if (filteredSuggestions.length) {
          return filteredSuggestions[activeSuggestionIndex]
        }
        return typedInput
      })
      setActiveSuggestionIndex(0)
      setShowSuggestions(false)
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return
      }

      setActiveSuggestionIndex((prevIndex) => prevIndex - 1)
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return
      }

      setActiveSuggestionIndex((prevIndex) => prevIndex + 1)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onSubmitUpdate(textInput)
    setInput("")
  }

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className

          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active"
          }

          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          )
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <span role="img" aria-label="tear emoji">
          😪
        </span>{" "}
        <em>sorry no suggestions</em>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={textInput} />
      </form>
      {showSuggestions && textInput && <SuggestionsListComponent />}
    </>
  )
}
