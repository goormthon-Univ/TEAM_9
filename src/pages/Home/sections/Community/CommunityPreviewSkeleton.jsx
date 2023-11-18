import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.div`
  width: 100%;
  height: 120px;
`;

export default function CommunityPreviewSkeleton() {
  return (
    <Wrapper>
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
}
