import { useMemo, Suspense } from "react";
import { useParams } from "react-router-dom";
import DiseaseDetail from "./DiseaseDetail.jsx";
import DiseaseDetailSkeleton from "./DiseaseDetailSkeleton.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import { fetchAxios } from "../../utils/utils.js";

export default function DiseaseDetailPage() {
  const { diseaseId } = useParams();
  const resource = useMemo(
    () => fetchAxios(`/api/disease/${diseaseId}`),
    [diseaseId],
  );

  return (
    <>
      <ErrorBoundary fallback={<div>페이지를 찾을 수 없음</div>}>
        <Suspense fallback={<DiseaseDetailSkeleton />}>
          <DiseaseDetail resource={resource} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
