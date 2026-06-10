const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function sendMessage(messages) {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error('Server error');
  }

  const data = await response.json();
  return data.message;
}
