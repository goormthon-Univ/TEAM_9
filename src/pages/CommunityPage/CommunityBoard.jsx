import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/CommunityBar.jsx";

const BoardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  flex-direction: column;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 30px;
  cursor: auto;
`;

const PostRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 세로 중앙 정렬 추가 */
  margin-bottom: 20px;
  position: relative; /* 상대 위치 설정 */
`;

const Number = styled.div`
  flex: 1;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const BoardTitle = styled.div`
  flex: 2;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Writer = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 10px;
`;

const Views = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 10px;
`;

const Date = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 10px;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;
const WriteButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end; /* 우측으로 정렬 */
`;
const WriteButton = styled.button`
  // background-color: #gray;
  // color: black;
  background-color: #ff6b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
`;

const CommunityBoard = ({ tap }) => {
  const navigate = useNavigate();
  // 가상의 게시글
  const postList = [
    {
      number: 1,
      title: "시즌웰 최고",
      writer: "그누",
      views: 999,
      date: "2023-11-17",
    },
    {
      number: 2,
      title: "시즌웰 짱~",
      writer: "콜록콜록",
      views: 2,
      date: "2023-11-18",
    },
  ];
  const handlePostClick = (post) => {
    // 게시물 번호를 이용하여 상세 페이지로 이동해야하지만, 예시로 detail 로 변경
    //navigate(`/community/${post.Number}`);
    navigate(`/community/${post.Number}`, { state: { post } });
  };

  const handleWriteButtonClick = () => {
    // 글 작성 페이지로 이동
    navigate("/community/write");
  };
  return (
    <>
      <SearchBar
        api="/api/community/search/"
        placeholder="검색어를 입력해 주세요"
        onSearch={(param) => {}}
        canBlank
      />
      <BoardContainer>
        <TitleRow>
          <Number>번호</Number>
          <BoardTitle>제목</BoardTitle>
          <Writer>작성자</Writer>
          <Views>조회수</Views>
          <Date>등록일</Date>
        </TitleRow>
        {postList.map((post) => (
          <PostRow key={post.number} onClick={() => handlePostClick(post)}>
            <Number>{post.number}</Number>
            <BoardTitle>{post.title}</BoardTitle>
            <Writer>{post.writer}</Writer>
            <Views>{post.views}</Views>
            <Date>{post.date}</Date>
            <Line />
          </PostRow>
        ))}
        {/* 여백 */}
        {[...Array(Math.max(10 - postList.length, 0))].map((_, index) => (
          <PostRow key={`empty-${index}`}>
            <Number>{postList.length + index + 1}</Number>
            <BoardTitle />
            <Writer />
            <Views />
            <Date />
            <Line />
          </PostRow>
        ))}
        <WriteButtonContainer>
          <WriteButton onClick={handleWriteButtonClick}>글쓰기</WriteButton>
        </WriteButtonContainer>
      </BoardContainer>
    </>
  );
};

export default CommunityBoard;
