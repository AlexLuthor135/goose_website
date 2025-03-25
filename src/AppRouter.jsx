import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Home page component
import ClinicalSupport from './ClinicalSupport';
import QualityCompliance from './QualityCompliance';
import RegulatoryAffairs from './RegulatoryAffairs';


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home page */}
        <Route path="/clinical-support" element={<ClinicalSupport />} />
        <Route path="/quality-and-compliance" element={<QualityCompliance />} />
        {/* <Route path="/regulatory-affairs" element={<RegulatoryAffairs />} /> */}
      </Routes>
    </Router>
  );
}
