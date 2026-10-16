
const modules = [
  {
    title: 'C++ Fundamentals',
    description: 'Variables, data types, operators, and control flow',
    duration: '4 hours',
    status: 'Completed',
  },
  {
    title: 'Functions and Arrays',
    description: 'Functions, arrays, strings, and problem solving',
    duration: '6 hours',
    status: 'In Progress',
  },
  {
    title: 'Object-Oriented Programming',
    description: 'Classes, objects, inheritance, and polymorphism',
    duration: '8 hours',
    status: 'Upcoming',
  },
  {
    title: 'Data Structures',
    description: 'Linked lists, stacks, queues, trees, and graphs',
    duration: '12 hours',
    status: 'Upcoming',
  },
]

const statusStyles = {
  Completed: 'bg-emerald-50 text-emerald-700',
  'In Progress': 'bg-indigo-50 text-indigo-700',
  Upcoming: 'bg-slate-100 text-slate-600',
}

function Roadmap() {
  return (
    <div>
      <div>
        <p className="text-sm font-medium text-indigo-600">YOUR LEARNING JOURNEY</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Learning Roadmap
        </h2>
        <p className="mt-2 text-slate-500">
          Follow your learning path one module at a time.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              C++ Developer Roadmap
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              4 modules · 30 estimated hours
            </p>
          </div>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700">
            25% complete
          </span>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/4 rounded-full bg-indigo-600" />
        </div>

        <div className="mt-8 space-y-5">
          {modules.map((module, index) => (
            <div key={module.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold ${
                  module.status === 'Completed'
                    ? 'bg-emerald-100 text-emerald-700'
                    : module.status === 'In Progress'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-slate-100 text-slate-500'
                }`}>
                  {index + 1}
                </div>
                {index < modules.length - 1 && (
                  <div className="mt-2 min-h-8 w-px flex-1 bg-slate-200" />
                )}
              </div>

              <div className="mb-2 min-w-0 flex-1 rounded-xl border border-slate-200 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h4 className="font-semibold text-slate-900">
                    {module.title}
                  </h4>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[module.status]}`}>
                    {module.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  {module.description}
                </p>
                <p className="mt-3 text-xs font-medium text-slate-400">
                  Estimated time: {module.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
