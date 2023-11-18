import React from "react";
import styled from "styled-components";
import CommunityRules from "../../components/CommunityRules";
import CenterMain from "../../components/CenterMain";

const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Dropdown = styled.select`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  min-height: 20px;
`;

const Input = styled.input`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

const TextArea = styled.textarea`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  width: 98.1%;
  resize: none;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #ff6b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
`;
const WriteButtonContainer = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-end;
`;

const WritePage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <CenterMain>
        <CommunityRules />
        <h3> 게시글 작성</h3>
        <WriteForm onSubmit={handleSubmit}>
          <Dropdown>
            <option value="medicalConsultation">의료상담</option>
            <option value="medicineNutritionReview">의약품/영양제 리뷰</option>
          </Dropdown>
          <Input type="text" placeholder="제목을 입력해주세요." />
          <Input type="text" placeholder="질병명을 입력해주세요." />
          <TextArea placeholder="내용을 입력해주세요" />
          <WriteButtonContainer>
            <SubmitButton type="submit">글쓰기</SubmitButton>
          </WriteButtonContainer>
        </WriteForm>
      </CenterMain>
    </>
  );
};

export default WritePage;
