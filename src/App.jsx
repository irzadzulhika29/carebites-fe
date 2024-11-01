
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from "./pages/LoginScreen";
import ShareMeals from './pages/ShareMeals';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShareMeals />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
