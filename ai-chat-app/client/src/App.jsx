import { useState, useRef, useEffect } from 'react'
import './App.css'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'

function App() {
  const [messages, setMessages] = useState([])
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSend(text) {
    const userMessage = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMessage])
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Chat</h1>
      </header>

      <ChatWindow messages={messages} bottomRef={bottomRef} />

      <MessageInput onSend={handleSend} disabled={false} />
    </div>
  )
}

export default App
