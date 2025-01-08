import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang Home */}
        <Route path="/about/:id" element={<AboutPage />} /> {/* Trang About */}
      </Routes>
    </Router>
  );
};

export default App;

