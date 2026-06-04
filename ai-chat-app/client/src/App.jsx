import { useState, useRef, useEffect } from 'react'
import './App.css'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'

function App() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  function handleSend(text) {
    const userMessage = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // temporary: simulate AI response after 2 seconds
    setTimeout(() => {
      const aiMessage = { role: 'assistant', content: 'This is a placeholder AI response.' }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Chat</h1>
      </header>

      <ChatWindow messages={messages} isLoading={isLoading} bottomRef={bottomRef} />

      <MessageInput onSend={handleSend} disabled={isLoading} />
    </div>
  )
}

export default App
