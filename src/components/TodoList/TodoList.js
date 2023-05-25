import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.neutral};
  border-radius: 5px;

  @media (min-width: 700px) {
    min-width: 500px;
    max-width: 700px;
    height: 50vh;
  }
`;

const List = styled.ul`
  list-style-type: none;
  overflow: scroll;
  margin: 0;
  padding: 0;
`;

function TodoList() {
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
    if (todo === "") return;
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
      <List>{todoItems}</List>
      <TodoInput handleNewTodo={handleNewTodo}></TodoInput>
    </Wrapper>
  );
}

export default TodoList;
