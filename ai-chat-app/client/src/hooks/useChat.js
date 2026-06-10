import { useState, useRef, useEffect } from 'react'
import { sendMessage } from '../services/api'

const STORAGE_KEY = 'chat_messages'

export function useChat() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  async function handleSend(text) {
    const userMessage = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)
    setError(null)

    try {
      const aiMessage = await sendMessage(updatedMessages)
      setMessages((prev) => [...prev, aiMessage])
    } catch (err) {
      console.error('Failed to send message:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  function clearChat() {
    setMessages([])
    setError(null)
  }

  return { messages, isLoading, error, bottomRef, handleSend, clearChat }
}
