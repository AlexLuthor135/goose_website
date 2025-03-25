import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SectionList from './SectionList'; // Adjust the path as needed
// import ClinicalPage from './ClinicalPage'; // Adjust the path as needed
// import QualityPage from './QualityPage'; // Adjust the path as needed
// import RegulatoryPage from './RegulatoryPage'; // Adjust the path as needed

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SectionList />} />
        <Route path="/clinical-pharmacovigilance" element={<ClinicalPage />} />
        <Route path="/quality-compliance" element={<QualityPage />} />
        <Route path="/regulatory-affairs" element={<RegulatoryPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
