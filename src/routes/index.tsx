import { fetchAllTodos } from '#/utils/fetchAllTodos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    const todos = await fetchAllTodos()
    return { todos }
  },
})

function App() {
  const { todos } = Route.useLoaderData()

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h1 className="text-3xl font-bold">Todo List</h1>
    </main>
  )
}
