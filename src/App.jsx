import { BrowserRouter as Router } from "react-router-dom";
import Admin from "./components/Admin";

import "/sass/main.scss";

function App() {
  return (
    <Router>
      <div className="App wrapper">
        <Admin />
      </div>
    </Router>
  );
}

export default App;
