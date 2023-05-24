import React from "react";
import styled from "styled-components";

const Item = styled.li`
  color: ${({ theme }) => theme.colors.grayscale.contrast};
  background-color: ${({ theme }) => theme.colors.grayscale.light};
  padding: 5px 0;
  line-height: 1.6;
  text-decoration: ${(props) => (props.$complete ? "line-through" : "none")};

  &:nth-child(2n) {
    color: ${({ theme }) => theme.colors.grayscale.main};
    background-color: ${({ theme }) => theme.colors.grayscale.contrast};
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
