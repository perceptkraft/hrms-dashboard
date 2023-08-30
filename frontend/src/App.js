import './App.css';
import Signin from './Components/Signin/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup/Signup';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import VerifyPassword from './Components/ForgotPassword/VerifyPassword';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path='/dash' element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* Forgot Password */}
          <Route path="/fpass" element={<ForgotPassword />} />
          {/* Verify */}
          <Route path="/verify" element={<VerifyPassword />} />
            {/* 404 */ }
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
