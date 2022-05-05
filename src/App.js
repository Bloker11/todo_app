import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/navbar/Navbar'
import { useAuthContext } from './hooks/useAuthContext'
import './index.css'

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady?( 
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            {user?<Home/>:<Redirect to="/login"/>}
          </Route>
          <Route path="/login">
            {user?<Redirect to="/"/>:<Login/>}
          </Route>
          <Route path="/signup">
            {user?<Redirect to="/"/>:<Signup/>}
          </Route>
        </Switch>
      </BrowserRouter>):<div class="middle">
                            <div class="bar bar1"></div>
                            <div class="bar bar2"></div>
                            <div class="bar bar3"></div>
                            <div class="bar bar4"></div>
                            <div class="bar bar5"></div>
                            <div class="bar bar6"></div>
                            <div class="bar bar7"></div>
                            <div class="bar bar8"></div>
                        </div>}
      
    </div>
  );
}

export default App
