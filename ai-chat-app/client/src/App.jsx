import './App.css'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'
import { useChat } from './hooks/useChat'

function App() {
  const { messages, isLoading, error, bottomRef, handleSend, clearChat } = useChat()

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Chat</h1>
        {messages.length > 0 && (
          <button className="clear-btn" onClick={clearChat} disabled={isLoading}>
            Clear
          </button>
        )}
      </header>

      <ChatWindow messages={messages} isLoading={isLoading} bottomRef={bottomRef} />

      {error && <p className="error-message">{error}</p>}

      <MessageInput onSend={handleSend} disabled={isLoading} />
    </div>
  )
}

export default App
