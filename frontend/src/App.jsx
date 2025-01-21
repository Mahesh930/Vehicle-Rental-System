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
