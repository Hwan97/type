import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';

const todos: TodoType[] = [
  { id: 1, text: '개발 공부하기', color: 'red', checked: false },
  { id: 2, text: '개발 공부하기1', color: 'yellow', checked: false },
  { id: 3, text: '개발 공부하기2', color: 'orange', checked: false },
  { id: 4, text: '개발 공부하기3', color: 'blue', checked: true },
  { id: 5, text: '개발 공부하기4', color: 'navy', checked: true },
  { id: 5, text: '개발 공부하기4', color: 'navy', checked: true },
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;
