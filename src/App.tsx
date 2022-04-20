import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Main from "./pages/Main"
import AboutMe from "./pages/AboutMe"
import ImageInfo from "./pages/ImageInfo"

import "bootstrap/dist/css/bootstrap.min.css"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />

        <Route path="/about_me" element={<AboutMe />} />

        <Route path="/info" element={<ImageInfo />} />

        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </Router>
  )
}

export default App
