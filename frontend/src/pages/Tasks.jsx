
import { useState } from 'react'

const initialTasks = [
  {
    id: 1,
    title: 'Learn C++ pointers',
    category: 'Concept learning',
    difficulty: 'Medium',
    duration: '30 min',
    completed: true,
  },
  {
    id: 2,
    title: 'Practice array problems',
    category: 'Coding practice',
    difficulty: 'Easy',
    duration: '45 min',
    completed: false,
  },
  {
    id: 3,
    title: 'Revise object-oriented programming',
    category: 'Revision',
    difficulty: 'Hard',
    duration: '25 min',
    completed: false,
  },
  {
    id: 4,
    title: 'Solve string manipulation exercises',
    category: 'Coding practice',
    difficulty: 'Medium',
    duration: '40 min',
    completed: false,
  },
]

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('All')

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed
    if (filter === 'Incomplete') return !task.completed
    return true
  })

  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900">My Tasks</h2>
      <p className="mt-2 text-slate-500">
        Practice consistently and track your learning activities.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">Task completion</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {completedCount} of {tasks.length}
            </p>
          </div>
          <span className="rounded-full bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700">
            {Math.round((completedCount / tasks.length) * 100)}% complete
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${(completedCount / tasks.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {['All', 'Incomplete', 'Completed'].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              filter === option
                ? 'bg-indigo-600 text-white'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'completed'}`}
              className="h-5 w-5 cursor-pointer accent-indigo-600"
            />

            <div className="min-w-0 flex-1">
              <p className={`font-medium ${
                task.completed
                  ? 'text-slate-400 line-through'
                  : 'text-slate-800'
              }`}>
                {task.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {task.category} · {task.duration}
              </p>
            </div>

            <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 sm:inline">
              {task.difficulty}
            </span>
          </div>
        ))}

        {filteredTasks.length === 0 && (
          <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
            No tasks in this category.
          </p>
        )}
      </div>
    </div>
  )
}

export default Tasks
