import Community from "./Community.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import { Title } from "../../components/paragraphs.jsx";
import CommunityRules from "../../components/CommunityRules.jsx";

export default function CommunityPage({ content }) {
  return (
    <>
      <CenterMain>
        <CommunityRules />
        <Title>건강 커뮤니티</Title>
        <Community content={content} />
      </CenterMain>
    </>
  );
}
