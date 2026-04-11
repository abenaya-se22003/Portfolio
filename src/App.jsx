import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Portfolio
        </h1>
        <p className="text-gray-400 text-lg">
          React + Tailwind CSS is ready 🚀
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-600 hover:border-gray-400 text-gray-300 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
