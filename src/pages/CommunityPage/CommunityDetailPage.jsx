import React from "react";
import { useParams, useLocation } from "react-router-dom";
import CenterMain from "../../components/CenterMain";
import CommunityRules from "../../components/CommunityRules.jsx";

import styled from "styled-components";

export const ContentContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 50px;
  height: 150px;
`;

export const CommentContainer = styled.div`
  margin-bottom: 20px;
`;

export const CommentTextarea = styled.textarea`
  width: 98%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  resize: none;
`;

export const CommentButton = styled.button`
  background-color: #ff6b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
`;
const ButtonContainer = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-end;
`;
const CommunityDetailPage = () => {
  const location = useLocation();
  const { post } = location.state || {};
  const { title, content } = post || {};

  return (
    <CenterMain>
      <CommunityRules />
      <div>
        <h2>{title}</h2>
        <ContentContainer>
          {/* <p>{content}</p> */}
          <p> 시즌웰이 최고다~</p>
        </ContentContainer>
        <CommentContainer>
          <h3>댓글</h3>
          <CommentTextarea placeholder="댓글을 입력하세요..." />
          <ButtonContainer>
            <CommentButton>댓글 등록</CommentButton>
          </ButtonContainer>
        </CommentContainer>
      </div>
    </CenterMain>
  );
};

export default CommunityDetailPage;
