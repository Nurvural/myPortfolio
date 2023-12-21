import "./App.css"
import About from "./components/about/About"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/home"
import Services from "./components/services/Services"

function App() {
  return (
 <>
  <div className="App">
      <Sidebar/>
      <main className="main">
        <Home/>
       <About />
       <Services/>
      </main>
    </div>
 </>
  )
}

export default App;
