import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Reports = React.lazy(() => import("pages/Reports"));
const Memberlogin = React.lazy(() => import("pages/Memberlogin"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/memberlogin" element={<Memberlogin />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
