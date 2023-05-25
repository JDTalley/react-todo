import React from "react";
import styled from "styled-components";

const Item = styled.li`
  color: ${(props) =>
    props.$complete ? props.theme.colors.accent : props.theme.colors.white};
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 5px 0;
  line-height: 1.6;
  text-decoration: ${(props) => (props.$complete ? "line-through" : "none")};

  &:first-child {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }

  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

function TodoItem({ item, handleClick }) {
  return (
    <Item
      id={item.id}
      $complete={item.completed}
      onClick={(e) => handleClick(e)}
    >
      {item.text}
    </Item>
  );
}

export default TodoItem;
