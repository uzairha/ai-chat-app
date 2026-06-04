import { useState, useRef, useEffect } from 'react'
import { sendMessage } from '../services/api'

export function useChat() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  async function handleSend(text) {
    const userMessage = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)

    const aiMessage = await sendMessage(updatedMessages)
    setMessages((prev) => [...prev, aiMessage])
    setIsLoading(false)
  }

  return { messages, isLoading, bottomRef, handleSend }
}
