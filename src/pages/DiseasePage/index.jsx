import { useState, useMemo, Suspense } from "react";
import DiseaseList from "./DiseaseList.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import { fetchAxios } from "../../utils/utils.js";

export default function DiseasePage() {
  const [query, setQuery] = useState("/api/disease");
  const resource = useMemo(() => fetchAxios(query), [query]);

  return (
    <>
      <div className="banner">이것은 배너입니다.</div>
      <main>
        <h3>가을 질병 치료법</h3>
        <SearchBar api="/api/search/disease" setQuery={setQuery} />
        <ErrorBoundary fallback={<div>Error!</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <DiseaseList resource={resource} />
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  );
}
