import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return(
    <div className="App">
      <header className="App-header">
        <img src={viteLogo} className="logo vite" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Vite + React</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          Click on the Vite and React logos to learn more
        </p>
      </header>
    </div>
  )
}

export default App
