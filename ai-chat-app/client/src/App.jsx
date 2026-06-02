import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Chat</h1>
      </header>

      <main className="chat-window">
        <p className="placeholder">Messages will appear here...</p>
      </main>

      <footer className="input-bar">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </footer>
    </div>
  )
}

export default App
