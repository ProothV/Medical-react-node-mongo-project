// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import Navbar from './Component/Navigation';
import SearchResults from './Component/SearchResults';
import Payment from './Component/Payment';
import Medicine from './Component/Medicine';
import Upload from './Component/upload';
import SignUp from './Component/SignUp';
import GuestCheckout from './Component/GuestCheckout';
import TrackOrder from './Component/Trackorder';
import Subscription from './Component/Subscription';
import Insurance from './Component/Insurance';
import Contact from './Component/Contact';
import Footer from './Component/footer';
import SignUpp from './pages/SignUp';
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AuthProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUpp />} />
          <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/guestcheckout" element={<GuestCheckout />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/contact" element={<Contact />} />  {/* Add Contact Route */}
        <Route path="/trackorder" element={<TrackOrder />} /> {/* Add Route */}
        <Route path="/search-results" element={<SearchResults/>} />
        <Route path="/medicine" element={<h2>Medicine Page</h2>} />
        <Route path="/upload" element={<h2>Upload Prescription Page</h2>} />
        <Route path="/subscription" element={<h2>Subscription Plans</h2>} />
        <Route path="/trackorder" element={<h2>Track Your Order</h2>} />
        <Route path="/insurance" element={<h2>Insurance Services</h2>} />
        <Route path="/contact" element={<h2>Contact Us</h2>} />
        <Route path="/payment" element={<h2>Payment Gateway</h2>} />
       
      </Routes>
      <Footer /> {/* Add Footer at the Bottom */}
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
