import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DiseasePage from "./pages/DiseasePage";
import DiseaseDetailPage from "./pages/DiseaseDetailPage";
import MedicinePage from "./pages/MedicinePage";
import MedicineDetailPage from "./pages/MedicineDetailPage";
import HealthGuidePage from "./pages/HealthGuidePage";
import NotFoundPage from "./pages/NotFoundPage";

function Rounter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
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
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return <Rounter />;
}

export default App;
