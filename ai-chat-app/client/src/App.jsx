import './App.css'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'

const testMessages = [
  { role: 'user', content: 'What is React?' },
  { role: 'assistant', content: 'React is a JavaScript library for building user interfaces.' },
  { role: 'user', content: 'Why do companies use it?' },
  { role: 'assistant', content: 'Because it makes building complex UIs much simpler with reusable components.' },
]

function App() {
  function handleSend(text) {
    console.log('Message sent:', text)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Chat</h1>
      </header>

      <ChatWindow messages={testMessages} />

      <MessageInput onSend={handleSend} disabled={false} />
    </div>
  )
}

export default App
