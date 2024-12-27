import './App.css'
import Todo from './components/Todo.jsx'
import { Provider } from "react-redux"
import { store } from './app/store'
import AddForm from './components/AddFrom'

function App() {
  return (
    <Provider store={store}>
      <div className="py-8  absolute w-full top-0 left-0 bg-[#082f49] min-h-screen">
        <div className='w-full mx-auto max-w-2xl shadow-md rounded-lg px-4 py-3' >
          <h1 className="text-2xl font-bold text-white text-center mt-10"><u>Manage Your Todos</u></h1>
          <div className="mt-8">
            <AddForm />
          </div>
          <div >
            <Todo />
          </div>
        </div>
      </div>
    </Provider >
  )
}

export default App
