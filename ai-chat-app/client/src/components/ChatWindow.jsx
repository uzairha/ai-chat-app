import Message from './Message'
import './ChatWindow.css'

function ChatWindow({ messages, bottomRef }) {
  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <p className="empty-state">Send a message to start chatting.</p>
      ) : (
        messages.map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))
      )}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatWindow
