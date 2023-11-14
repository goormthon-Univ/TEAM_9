import { useMemo, Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import { fetchAxios } from "../../utils/utils.js";

function DiseaseDetail({ resource }) {
  const data = resource();
  return <div>{JSON.stringify(data)}</div>;
}

export default function DiseaseDetailPage() {
  const { diseaseId } = useParams();
  const resource = useMemo(
    () => fetchAxios(`/api/disease/${diseaseId}`),
    [diseaseId],
  );

  return (
    <>
      <ErrorBoundary fallback={<div>페이지를 찾을 수 없음</div>}>
        <Suspense fallback={<div>로딩중...</div>}>
          <DiseaseDetail resource={resource} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
