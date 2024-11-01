import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from "./pages/LoginScreen";
import ShareMeals from './pages/ShareMeals';
import GrabMeals from './pages/GrabMeals';
import CharityCampaign from './pages/CharityCampaign';
import Settings from './pages/Settings';
import ShareYourActivity from './pages/ShareYourActivity';
import BlogArtikel from './pages/BlogArtikel';
import Home from './pages/Home';
import RegisterScreen from './pages/RegisterScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/grabmeals" element={<GrabMeals />} />
        <Route path="/sharemeals" element={<ShareMeals />} />
        <Route path="/charitycampaign" element={<CharityCampaign />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/shareyouractivity" element={<ShareYourActivity />} />
        <Route path="/blogarticle" element={<BlogArtikel />} />
        <Route path="/loginscreen" element={<LoginScreen />} />
        <Route path="/registerscreen" element={<RegisterScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
