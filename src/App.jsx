import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import DiseasePage from "./pages/DiseasePage";
import DiseaseDetailPage from "./pages/DiseaseDetailPage";
import MedicinePage from "./pages/MedicinePage";
import MedicineDetailPage from "./pages/MedicineDetailPage";
import HealthGuidePage from "./pages/HealthGuidePage";
import CommunityPage from "./pages/CommunityPage";
import CommunityDetailPage from "./pages/CommunityPage/CommunityDetailPage.jsx";
import WritePage from "./pages/CommunityPage/WritePage.jsx";

import NotFoundPage from "./pages/NotFoundPage";
import { Home } from "./pages/Home/Home.jsx";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="disease">
          <Route path=":diseaseId" element={<DiseaseDetailPage />} />
          <Route path="" element={<DiseasePage />} />
        </Route>
        <Route path="medicine">
          <Route path=":medicineId" element={<MedicineDetailPage />} />
          <Route path="" element={<MedicinePage />} />
        </Route>
        <Route path="healthGuide">
          <Route path="food" element={<HealthGuidePage content="food" />} />
          <Route path="living" element={<HealthGuidePage content="living" />} />
          <Route path="" element={<HealthGuidePage content="food" />} />
        </Route>
        <Route exact path="community">
          <Route
            path="mainboard"
            element={<CommunityPage content="mainboard" />}
          />
          <Route path="consult" element={<CommunityPage content="consult" />} />
          <Route path="review" element={<CommunityPage content="review" />} />
          <Route path="write" element={<WritePage content="write" />} />
          <Route path=":postNumber" element={<CommunityDetailPage />} />
          {/* <Route path="1" element={<CommunityDetailPage />} /> */}

          <Route path="" element={<CommunityPage content="mainboard" />} />
        </Route>
        {/* <Route path={"*"} element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
