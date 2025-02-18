import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import CreatePosts from "./components/posts/CreatePosts";
import Login from "./components/Login";
import { useState } from "react";
import LisPersone from "./components/composantsProjet2/LisPersone";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/Create"
          element={isAuthenticated ? <CreatePosts /> : <Navigate to="/login" />}
        />
         <Route
   path="/zzz"
   element={isAuthenticated ? <LisPersone /> : <Navigate to="/login" />}
 />
    <Route path="/Login" element={<Login onLogin={handleLogin} />} />
    
      </Routes>
    </Router>
  );
}

export default App;
