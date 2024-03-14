import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Footer from './components/Footer'

function App() {

  return (
    <div className='h-screen'>
      <header>
        <h1 className='text-white'>React With Redux toolkit updated</h1>
      </header>
      <div>
        <AddTodo />
        <Todos />

      </div>
      <footer class="sticky top-[100vh] p-3">
      <Footer />
      </footer>
      
    </div>
  )
}

export default App
