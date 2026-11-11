export const fetchAllTodos = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`)

  return response.json()
}
