import { useState, useMemo, Suspense } from "react";
import MedicineList from "./MedicineList.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import Banner from "../../components/Banner.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import { fetchAxios } from "../../utils/utils.js";

export default function DiseasePage() {
  const [query, setQuery] = useState("/api/medicine");
  const resource = useMemo(() => fetchAxios(query), [query]);

  return (
    <>
      <Banner page="medicine" />
      <CenterMain>
        <h3>가을 질병 의약품</h3>
        <SearchBar
          api="/api/search/medicine"
          placeholder="의약품을 입력해 주세요"
          onSearch={(param) => {
            setQuery(`/api/search/medicine/${param}`);
          }}
        />
        <ErrorBoundary fallback={<div>Error!</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <MedicineList resource={resource} />
          </Suspense>
        </ErrorBoundary>
      </CenterMain>
    </>
  );
}
