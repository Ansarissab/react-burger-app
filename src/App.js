import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Burger from './components/Burger'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <NavBar />
            <Signup />
          </Route>
          <Route path="/">
            <NavBar />
            <Burger />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
