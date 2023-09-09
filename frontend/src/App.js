
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Battle from './pages/Battle';
import Roster from './pages/Roster'

function App() {
  return (
<Router>
              <Routes>
                <Route
                  path="/"
                  element={<Homepage />}
                />
                <Route
                  path="/battle"
                  element={<Battle />}
                />
                <Route
                  path="/roster"
                  element={<Roster />}
                />
              
              </Routes>
            </Router>
  );
}
 
export default App;
