import { useParams } from 'react-router-dom';

export default function DiseaseDetailPage() {
  const { diseaseId } = useParams();
  return <div>{diseaseId}</div>;
}
