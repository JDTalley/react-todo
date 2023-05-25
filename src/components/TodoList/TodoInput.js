import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 12px 8px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  outline: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.accent};
    outline: none;
  }
`;

function TodoInput({ handleNewTodo }) {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleNewTodo(text);
      setText("");
    }
  };

  return (
    <Input
      type="text"
      name="newTodo"
      value={text}
      placeholder="Add New Todo"
      onChange={handleChange}
      onKeyUp={handleEnterPress}
    ></Input>
  );
}

export default TodoInput;
