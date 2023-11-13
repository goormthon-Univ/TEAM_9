import { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import { fetchAxios } from "../utils/utils.js";

function Reader({ resource }) {
  return <div>{resource()}</div>;
}

export default function DiseasePage() {
  const read = fetchAxios("/api/test");

  return (
    <>
      <div>이것은 테스트 페이지입니다.</div>
      <ErrorBoundary fallback={<div>Error!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Reader resource={read} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
