// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import bgimg from '../images/logo.png'

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container-fluid">
//         {/* Brand Logo */}
//         <Link className="navbar-brand" to="/">
//           <img src={bgimg} alt="Logo" width="120" />
//         </Link>

//         {/* Search Bar in the Middle */}
//         <form className="d-flex mx-auto w-50">
//           <input className="form-control me-2" type="search" placeholder="Search medicine..." />
//           <button className="btn btn-light" type="submit">Search</button>
//         </form>

//         {/* Navigation Links */}
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>
        
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/medicine">Medicine</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/upload">Upload</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/subscription">Subscription</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/trackorder">Track Order</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/insurance">Insurance</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
//             <li className="nav-item"><Link className="nav-link" to="/payment">Payment</Link></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MedicalSearch from "./MedicalSearch";
import bgimg from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={bgimg} alt="Logo" width="120" />
        </Link>

        {/* Integrated Medical Search Bar */}
        <MedicalSearch />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/medicine">Medicine</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/upload">Upload</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/subscription">Subscription</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/trackorder">Track Order</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/insurance">Insurance</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/payment">Payment</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
