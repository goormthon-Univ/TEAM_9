import { useState } from "react";
import Banner from "../../components/Banner.jsx";
import HealthGuideButtons from "./HealthGuideButtons.jsx";
import HealthGuideParagraph from "./HealthGuideParagraph.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";
import { getSeasonString } from "../../utils/utils.js";

export default function HealthGuidePage({ content }) {
  const [folded, setFolded] = useState(true);
  const seasonString = getSeasonString();
  return (
    <>
      <Banner page="healthGuide" />
      <CenterMain $gap={20}>
        <SectionTitle
          title={`${seasonString}철 건강 가이드`}
          moreClick={() => setFolded((prev) => !prev)}
          moreRender={folded}
        />
        <HealthGuideButtons
          content={content}
          onChange={() => setFolded(true)}
        />
        <HealthGuideParagraph tap={content} folded={folded} />
      </CenterMain>
    </>
  );
}
