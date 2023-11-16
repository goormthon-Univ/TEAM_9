import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiseasePage from "./pages/DiseasePage";
import DiseaseDetailPage from "./pages/DiseaseDetailPage";
import MedicinePage from "./pages/MedicinePage";
import MedicineDetailPage from "./pages/MedicineDetailPage";
import HealthGuidePage from "./pages/HealthGuidePage";

function Rounter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="disease">
          <Route path=":diseaseId" element={<DiseaseDetailPage />} />
          <Route path="" element={<DiseasePage />} />
        </Route>
        <Route path="medicine">
          <Route path=":medicineId" element={<MedicineDetailPage />} />
          <Route path="" element={<MedicinePage />} />
        </Route>
        <Route path="healthGuide" element={<HealthGuidePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return <Rounter />;
}

export default App;
