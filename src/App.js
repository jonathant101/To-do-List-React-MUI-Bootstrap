import React, { useState, Fragment, useEffect, useRef } from 'react';
import NavBar from './components/NavBar.jsx';
import uniqid from 'uniqid';
import TodosMap from './components/TodosMap.jsx';

const KEY = 'todoApp.todos';

export default function App() {
  const [todo, setTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);
  const [boleanTodo, setBoleanTodo] = React.useState(false);
  const [todoId, setTodoId] = React.useState('');

  React.useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodoList(storedTodos);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (e) => {
    console.log(todoList);
    e.preventDefault();
    if (todo === '') {
      return;
    }
    setTodoList([...todoList, { id: uniqid(), todo, tc: false }]);
    setTodo('');
  };

  const dellTodo = (id) => {
    const newTodos = todoList.filter((item) => item.id !== id);

    setTodoList(newTodos);
  };

  const btnEditTodo = (item) => {
    setBoleanTodo(true);
    setTodoId(item.id);

    setTodo(item.todo);
  };

  const editTodo = (e) => {
    e.preventDefault();

    if (todo === '') {
      return;
    }

    const newTodos = todoList.map((item) =>
      item.id === todoId ? { id: uniqid(), todo, tc: false } : item
    );

    setTodoList(newTodos);
    setBoleanTodo(false);
    setTodoId('');
    setTodo('');
  };

  const cheked = (id, tc, todo) => {
    console.log(id, tc, todo);

    const newTodos = todoList.map((item) =>
      item.id === id ? { id: uniqid(), todo, tc } : item
    );
    setTodoList(newTodos);
  };

  return (
    <Fragment>
      <NavBar
        add={addTodo}
        todo={todo} // setTodo
        input={setTodo}
        bolean={boleanTodo}
        setBtnToEdit={editTodo}
      />
      {todoList.length ? (
        <p className="d-flex justify-content-center mt-1">
          You have {todoList.filter((todo) => !todo.tc).length} tasks to
          complete!
        </p>
      ) : null}
      <TodosMap
        list={todoList}
        editBtn={btnEditTodo}
        dell={dellTodo}
        chek={cheked}
      />
    </Fragment>
  );
}
