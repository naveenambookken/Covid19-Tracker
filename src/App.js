import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import India from './Components/India'
import World from './Components/World'

import {
  HashRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App(){ 
  
  return (
    <div className="App">
      <Router>
        <div className="container-fluid">
          <Header/>
          


          <Switch>
            <Route exact path="/">
            <India/>
            </Route>
            <Route path="/india">
              <India />
            </Route>
            <Route path="/world">
              <World />
            </Route>
          </Switch>


        </div>
      </Router>
      </div>
  );
}



export default App;
