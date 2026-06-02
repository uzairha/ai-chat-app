import './App.css'
import Message from './components/Message'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Chat</h1>
      </header>

      <main className="chat-window">
        <Message role="user" content="What is React?" />
        <Message role="assistant" content="React is a JavaScript library for building user interfaces." />
      </main>

      <footer className="input-bar">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </footer>
    </div>
  )
}

export default App
