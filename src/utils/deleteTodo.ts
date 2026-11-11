export const deleteTodo = async (id: number) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
    method: 'DELETE',
  })

  return response.json()
}
