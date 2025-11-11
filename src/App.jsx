import './App.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./Pages/Home/LandingPage.jsx"
import Login from "./Pages/Auth/login.jsx";
import Dashboard from "./Pages/Home/Dashboard.jsx";
import EditResume from "./Pages/ResumeUpdate/EditResume.jsx"

function App() {
  return (
    <>
     <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/resume/:resumeId" element={<EditResume />} />

        </Routes>
      </Router>
     </div> 
    
    <Toaster 
    toastOptions={{
      className: "",
      style :{
        fontSize: "13px",
      },
    }
    }
    />
    </>
  )
}

export default App
