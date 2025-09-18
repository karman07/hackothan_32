import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Verifier from "./pages/Verifier";
import TeamPage from "./pages/TeamPage";
import ContactForm from "./pages/ContactUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Verifier />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path='/contact' element={<ContactForm />} />
    </Routes>
  );
}
