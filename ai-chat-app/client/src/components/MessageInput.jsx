import { useState } from 'react'
import './MessageInput.css'

function MessageInput({ onSend, disabled }) {
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (inputValue.trim() === '') return
    onSend(inputValue)
    setInputValue('')
  }

  return (
    <form className="input-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a message..."
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || inputValue.trim() === ''}>
        Send
      </button>
    </form>
  )
}

export default MessageInput
