
import './App.css';
import Header from './Header'
import { BrowserRouter ,Switch ,Route  } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

import Footer from './Footer'
import Navlinks from './Navlinks'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route path="/checkout">
      <Header/>
     
     </Route>
  
     <Route path="/Login">
     <Login/>
     </Route>
     <Route>
       <Header/>
       <Navlinks/>
       <Home/>
       <Footer/>
       </Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
