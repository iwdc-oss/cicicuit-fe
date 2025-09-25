import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoutes'
import Home from './pages/Home'

function App() {

  return (
    <Router> 
      <Routes>
        <Route element={<ProtectedRoute />}> 
          <Route path='/' element={<Home />} />
        </Route> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );

}

export default App
