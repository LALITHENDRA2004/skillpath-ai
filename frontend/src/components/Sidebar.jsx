
const navigationItems = [
  { label: 'Dashboard', icon: '⌂' },
  { label: 'Learning Roadmap', icon: '◇' },
  { label: 'Tasks', icon: '✓' },
  { label: 'Schedule', icon: '▦' },
  { label: 'Progress', icon: '↗' },
]

function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="flex w-full flex-col border-r border-slate-200 bg-white p-5 md:min-h-screen md:w-64">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
          S
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-900">SkillPath AI</h1>
          <p className="text-xs text-slate-500">Your learning companion</p>
        </div>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Workspace
      </p>

      <nav className="flex flex-wrap gap-2 md:flex-col">
        {navigationItems.map((item) => {
          const active = currentPage === item.label

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavigate(item.label)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                active
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="mt-8 rounded-2xl bg-indigo-50 p-4 md:mt-auto">
        <p className="font-semibold text-indigo-900">Keep going!</p>
        <p className="mt-1 text-sm text-indigo-700">
          Small steps lead to big progress.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
