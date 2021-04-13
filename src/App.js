import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./Wrapper";
import CartContainer from "./containers/CartContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Wrapper} />
          <Route path="/cart" component={CartContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
