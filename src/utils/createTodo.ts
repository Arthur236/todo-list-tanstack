export const createTodo = async (newTodo: { title: string }) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  })

  return response.json()
}
