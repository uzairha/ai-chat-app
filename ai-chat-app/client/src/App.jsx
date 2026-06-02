import './App.css'
import ChatWindow from './components/ChatWindow'

const testMessages = [
  { role: 'user', content: 'What is React?' },
  { role: 'assistant', content: 'React is a JavaScript library for building user interfaces.' },
  { role: 'user', content: 'Why do companies use it?' },
  { role: 'assistant', content: 'Because it makes building complex UIs much simpler with reusable components.' },
]

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Chat</h1>
      </header>

      <ChatWindow messages={testMessages} />

      <footer className="input-bar">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </footer>
    </div>
  )
}

export default App
