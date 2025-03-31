import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Booking from './component/Booking';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Placebooking from './component/Placebooking';
import Privatecomponent from './component/Privatecomponent';
import Bookinghistory from './component/Bookinghistory';
import Footer from './component/Footer';
import AboutUsPage from './component/Aboutus';
import SeatChart from './component/SeatChart';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route element={<Privatecomponent />}>
            <Route path="/bookroom" element={<Booking />} />
            <Route path="/bookinghistory" element={<Bookinghistory />} />
            <Route
              path="/booking/:roomId/:fromdate/:todate"
              element={<Placebooking />}
            />
          </Route>
          <Route path="/" element={<Home />} />

          <Route path="/Signup" element={<Signup />} />
          <Route path="/seat" element={<SeatChart />} />

          <Route path="/Signin" element={<Signin />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
