import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../assets/searchIcon.svg";

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Select = styled.select`
  padding: 15px;
  border: 2px solid #ff6b00;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const TextInput = styled.input`
  flex: 1;
  height: 100%;
  outline: none;
  border: 2px solid #ff6b00;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 30px;
  font-family: Pretendard;
  font-size: 1.2rem;
`;

const SubmitButton = styled.div`
  width: 32px;
  height: 32px;
  margin-left: -40px;
  cursor: pointer;
  transition: transform 0.2s;
  &::after {
    content: url(${SearchIcon});
    display: block;
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1);
  }
`;

export default function SearchBar({ onSearch, placeholder = "" }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("title");

  const onSubmit = () => {
    onSearch(query, activeCategory);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        <option value="title">제목</option>
        <option value="content">내용</option>
      </Select>
      <InputContainer>
        <TextInput
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
        />

        <SubmitButton type="submit" />
      </InputContainer>
    </Form>
  );
}
