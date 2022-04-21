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
import { Provider } from "react-redux"
import store from "./redux"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />

          <Route path="/about_me" element={<AboutMe />} />

          <Route path="/info/:id" element={<ImageInfo />} />

          <Route path="/" element={<Navigate to="/main" />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
