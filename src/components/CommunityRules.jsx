import React from "react";

const CommunityRules = () => {
  const containerStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    marginBottom: "20px",
    marginTop: "80px",
    paddingLeft: "50px",
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    marginTop: "10px",
    color: "#FF6B00",
  };

  return (
    <div style={containerStyle}>
      <div style={subtitleStyle}>커뮤니티 규칙</div>
      <p>
        ex)욕설, 상호비방 등 근거없는 내용으로 사생활침해 및 명예훼손의 소지가
        있다고 판명되는 게시물은 사전통보없이 삭제됩니다.
      </p>
      {/* 추후 필요시 추가 */}
    </div>
  );
};

export default CommunityRules;
