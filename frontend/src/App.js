import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import FileManager from "./pages/Contact";
import Contact from "./pages/Contact";
import AdultCounselling from "./pages/AdultCounselling"
import ChildCounselling from "./pages/ChildCounselling"
import Posts from "./pages/Posts";
import AddPost from "./pages/AddPost";
import Login from "./pages/Login";
import { useState } from "react";
import BookAppointment from "./pages/BookAppointment";
function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));



  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/adult" element={< AdultCounselling/>} />
          <Route path="/services/child" element={< ChildCounselling/>} />
          <Route path="/blog/posts" element={<Posts isAuth={isAuth} />} />
          <Route path="/blog/addpost" element={<AddPost isAuth={isAuth} />} />
          <Route path="/blog/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment/>} />
          
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
    


  );
}

export default App;