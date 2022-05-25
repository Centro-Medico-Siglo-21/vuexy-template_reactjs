import Home from './Pages/Home';
import Login from './Pages/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
}
from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
