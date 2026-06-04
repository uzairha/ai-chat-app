import Message from './Message'
import LoadingIndicator from './LoadingIndicator'
import './ChatWindow.css'

function ChatWindow({ messages, isLoading, bottomRef }) {
  return (
    <div className="chat-window">
      {messages.length === 0 && !isLoading ? (
        <p className="empty-state">Send a message to start chatting.</p>
      ) : (
        messages.map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))
      )}
      {isLoading && <LoadingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatWindow
