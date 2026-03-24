import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GenerateReport from "./pages/GenerateReport";
import BodyComposition from "./pages/BodyComposition";
import FatAnalysis from "./pages/FatAnalysis";
import MetabolicIndicators from "./pages/MetabolicIndicators";
import WeightAnalysis from "./pages/WeightAnalysis";
import Exercises from "./pages/Exercises";
import Diet from "./pages/Diet";
import Account from "./pages/Account";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<GenerateReport />} />
        <Route path="/body-composition" element={<BodyComposition />} />
        <Route path="/fat-analysis" element={<FatAnalysis />} />
        <Route path="/metabolic-indicators" element={<MetabolicIndicators />} />
        <Route path="/weight-analysis" element={<WeightAnalysis />} />        
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;