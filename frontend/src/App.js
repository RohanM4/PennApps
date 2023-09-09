
import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Battle from './pages/Battle';
import Roster from './pages/Roster'
import Onboarding from './pages/Onboarding';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  useEffect(() => {
    // some fetch call to check if user has onboarded
  }, [])
  return (
  <Router>
    <Routes>
              <Route
                path="/"
                element={<Navigate to={showOnboarding ? "/onboarding" : "/homepage"} />}
              />
              <Route
              path="/homepage"
              element={<Homepage />}
            />
              <Route
                path="/onboarding"
                element={<Onboarding />}
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
