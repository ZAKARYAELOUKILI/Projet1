
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PostDetails from "./components/posts/PostDetails";
import CreatePosts from "./components/posts/CreatePosts";
  function App() {
  return (
    <Router>
   <div className="App">
    <Header/>
    <main>
      <Routes>

      <Route path="/"Component={Home}/>
      <Route path="/post/:id"Component={PostDetails}/>
      <Route path="/create"Component={CreatePosts}/>
      </Routes>
      
    </main>
    <Footer/>

   </div>
    </Router>
    
  );
}

export default App;
