<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookNow from "./Pages/BookNow";
import Vehicles from "./Pages/Vehicle";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Registration from "./Pages/Registration";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/profile"
                    element={<Profile />}
                />
                <Route
                    path="/register"
                    element={<Registration />}
                />
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/booknow"
                    element={<BookNow />}
                />
                <Route
                    path="/vehicle"
                    element={<Vehicles />}
                />
                <Route
                    path="/testimonial"
                    element={<Testimonials />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
        </Router>
    );
}

export default App;
=======
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
>>>>>>> 2363e4f92a4dfadfa7f06a96c24e3d85257abd53
