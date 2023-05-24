import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  max-width: 750px;
  max-height: 75vh;
  overflow: scroll;
  text-align: center;
  background: ${({ theme }) => theme.colors.grayscale.contrast};
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.primary.dark};
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.primary.contrast};
  color: ${({ theme }) => theme.colors.grayscale.contrast};
  margin: 0;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: normal;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function Todos() {
  const [todos, setTodos] = React.useState([
    {
      id: crypto.randomUUID(),
      text: "Todo 1",
      completed: true,
    },
    {
      id: crypto.randomUUID(),
      text: "Todo 2",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      text: "Todo 3",
      completed: false,
    },
  ]);

  const handleTodoClick = (e) => {
    const updatedTodoId = e.target.id;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleNewTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: todo,
        completed: false,
      },
    ]);
  };

  const todoItems = todos.map((item) => (
    <TodoItem key={item.id} item={item} handleClick={handleTodoClick} />
  ));

  return (
    <Wrapper>
      <Title>React Todos</Title>
      <TodoInput handleNewTodo={handleNewTodo}></TodoInput>
      <List>{todoItems}</List>
    </Wrapper>
  );
}

export default Todos;
