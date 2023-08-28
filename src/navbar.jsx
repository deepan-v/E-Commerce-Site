import { Component } from "react";
import { Link } from "react-router-dom";
 class Deepan extends Component{
    render(){
        return(<>
        <nav className="navbar navbar-expand-lg navbar-success bg-success ">
  <div className="container-fluid ">
    <a className="navbar-brand changecolor" href="\#">My App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className=" nav-link Textl-CO">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="Dashboard" className="nav-link Textl-CO">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="Customers" className="nav-link Textl-CO">Customers</Link>
        </li>
        <li className="nav-item">
          <Link to="cart" className="nav-link Textl-CO ">Shoppingcart</Link>
        </li>
      </ul>
       </div>
  </div>
</nav>
        </>)
    }
}

export default Deepan