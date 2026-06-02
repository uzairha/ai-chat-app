import './Message.css'

function Message({ role, content }) {
  return (
    <div className={`message ${role}`}>
      <span className="message-label">{role === 'user' ? 'You' : 'AI'}</span>
      <p className="message-content">{content}</p>
    </div>
  )
}

export default Message
