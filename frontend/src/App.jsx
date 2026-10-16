
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import Roadmap from './pages/Roadmap'
import Tasks from './pages/Tasks'

const dashboardTasks = [
  { title: 'Learn C++ pointers', category: 'Concept learning', duration: '30 min', completed: true },
  { title: 'Practice array problems', category: 'Coding practice', duration: '45 min', completed: false },
  { title: 'Revise object-oriented programming', category: 'Revision', duration: '25 min', completed: false },
]

function Dashboard() {
  return (
    <>
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Your learning workspace</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">Welcome back!</h2>
          <p className="mt-2 text-slate-500">Make today count, one concept at a time.</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">S</div>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Learning progress" value="35%" description="Across your learning roadmap" icon="↗" />
        <StatCard title="Completed tasks" value="12" description="Tasks completed so far" icon="✓" />
        <StatCard title="Study time" value="8.5 hrs" description="Time invested this week" icon="◷" />
        <StatCard title="Current streak" value="4 days" description="Keep your momentum going" icon="⚡" />
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 xl:col-span-2">
          <h3 className="text-lg font-bold text-slate-900">Today's learning plan</h3>
          <p className="mt-1 text-sm text-slate-500">Your next steps toward your learning goal</p>

          <div className="mt-5 space-y-3">
            {dashboardTasks.map((task) => (
              <div key={task.title} className="flex items-center gap-4 rounded-xl border border-slate-100 p-4">
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${task.completed ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 text-transparent'}`}>✓</span>
                <div className="min-w-0 flex-1">
                  <p className={`font-medium ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{task.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{task.category}</p>
                </div>
                <span className="shrink-0 text-xs text-slate-500 sm:text-sm">{task.duration}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold text-slate-900">Roadmap progress</h3>
          <p className="mt-1 text-sm text-slate-500">C++ fundamentals</p>
          <div className="mt-6 flex justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#4f46e5 35%, #e2e8f0 35%)' }}>
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white">
                <span className="text-3xl font-bold text-slate-900">35%</span>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-slate-500">Keep learning consistently!</p>
        </div>
      </section>
    </>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard')

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="min-w-0 flex-1 p-5 sm:p-8">
        {currentPage === 'Dashboard' && <Dashboard />}
        {currentPage === 'Learning Roadmap' && <Roadmap />}
        {currentPage === 'Tasks' && <Tasks />}
        {currentPage === 'Schedule' && (
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Study Schedule</h2>
            <p className="mt-2 text-slate-500">Schedule planning will be implemented in a later step.</p>
          </div>
        )}
        {currentPage === 'Progress' && (
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Learning Progress</h2>
            <p className="mt-2 text-slate-500">Detailed progress analytics will be implemented in a later step.</p>
          </div>
        )}

        <footer className="mt-8 text-center text-sm text-slate-400">
          SkillPath AI · Your journey, your pace.
        </footer>
      </main>
    </div>
  )
}

export default App
