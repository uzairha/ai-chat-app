import './App.css'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'
import { useChat } from './hooks/useChat'

function App() {
  const { messages, isLoading, bottomRef, handleSend } = useChat()

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
