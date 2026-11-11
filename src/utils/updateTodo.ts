export const updateTodo = async (
  id: number,
  updatedTodo: { title: string; completed: boolean },
) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  })

  return response.json()
}
