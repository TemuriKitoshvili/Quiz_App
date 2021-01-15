import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/App.scss";
// Components
import Home from "./components/Home";
import GenerateQuestions from "./components/GenerateQuestions";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/questions">
            <GenerateQuestions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
