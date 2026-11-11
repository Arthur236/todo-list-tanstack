import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          About
        </p>

        <h1 className="mb-2">
          Simple Todo List application built with TanStack Start
        </h1>
      </section>
    </main>
  )
}
