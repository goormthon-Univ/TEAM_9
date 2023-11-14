import styled from "styled-components";

const SummeryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 60px;
  margin-bottom: 60px;
`;

const Pic = styled.div`
  width: 340px;
  height: 480px;
  background-color: #ccc;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

export default function DiseaseDetail({ resource }) {
  const data = resource();

  return (
    <>
      <SummeryWrapper>
        <Pic>(사진, api 미존재)</Pic>
        <div className="descriptions">
          <Title>{data.disease_name}</Title>
          <SubTitle>질병소개</SubTitle>
          <p>(api 미존재, 백엔드와 상의 예정)</p>
        </div>
      </SummeryWrapper>
      <article>
        <Title>질병 치료법</Title>
        <section>
          <SubTitle>예방법</SubTitle>
          <p>{data.disease_protect}</p>
        </section>
        <section>
          <SubTitle>치료법</SubTitle>
          <p>{data.disease_cure}</p>
        </section>
        <section>
          <SubTitle>관련 약품</SubTitle>
          <p>{data.medicine_name}</p>
        </section>
      </article>
    </>
  );
}
