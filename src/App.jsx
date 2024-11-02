import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from "./pages/LoginScreen";
import ShareMeals from './pages/ShareMeals';
import GrabMeals from './pages/GrabMeals';
import CharityCampaign from './pages/CharityCampaign';
import Settings from './pages/Settings';
import ShareYourActivity from './pages/ShareYourActivity';
import BlogArtikel from './pages/BlogArtikel';
import LandingPage from './pages/LandingPage';
import RegisterScreen from './pages/RegisterScreen';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/grabmeals" element={<GrabMeals />} />
        <Route path="/sharemeals" element={<ShareMeals />} />
        <Route path="/charitycampaign" element={<CharityCampaign />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/shareyouractivity" element={<ShareYourActivity />} />
        <Route path="/blogarticle" element={<BlogArtikel />} />
        <Route path="/loginscreen" element={<LoginScreen />} />
        <Route path="/registerscreen" element={<RegisterScreen />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
