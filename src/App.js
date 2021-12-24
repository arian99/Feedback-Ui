import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutLink from "./components/AboutLink";
import FeedbackForm from "./components/FeedbackForm";

import FeedbackList from "./components/FeedbackList";
import Feedbackstate from "./components/Feedbackstate";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";

import Aboutpage from "./pages/Aboutpage";
const App = () => {
  

  

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
          exact
          path='/'
          element={
            <>
              <FeedbackForm  />
              <Feedbackstate />
              <FeedbackList/>
            </>
      } ></Route>

         <Route path="/about" element={<Aboutpage/>} />
         
        </Routes>
        <AboutLink/>
      </div>
    </Router>
    </FeedbackProvider>
  );
};

export default App;
