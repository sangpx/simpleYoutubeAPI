import "./App.css";
import Nav from "./views/Nav";
import YoutubeSearch from "./views/YoutubeSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact>
            <YoutubeSearch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
