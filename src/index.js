import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import Nav from "./navbar/Nav.jsx";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";

const App = () => (
  <Router>
    <React.StrictMode>
      <div>
        <Routes>
          <Route
            path="/page1"
            element={
              <>
                <Nav /> <Page1 />
              </>
            }
          />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </React.StrictMode>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
reportWebVitals();
