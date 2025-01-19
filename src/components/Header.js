
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1> codv Blog</h1>
        <div className="links" >
            <Link to="/"> <button style={{padding :"10px"}}>Home</button> </Link>
            <Link to="/create"> <button  style={{padding :"10px"}}>New Post</button></Link>
        </div>
      </nav>
    </header>
  )
}

export default Header