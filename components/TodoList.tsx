import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import palette from '../styles/palette';
import { TodoType } from '../types/todo';

const Container = styled.div`
  width: 100%;

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${palette.gray};

      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }
      .todo-right-side {
        display: flex;
        margin-right: 12px;
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        .todo-trash-can {
          width: 16px;
          path {
            fill: ${palette.deep_red};
          }
        }
        .todo-check-mark {
          fill: ${palette.deep_green};
        }
        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }

  .todo-num {
    margin-left: 12px;
  }

  .todo-list-header {
    padding: 12px;
    position: relative;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      margin: 0 0 8px;
      span {
        margin-left: 12px;
      }
    }

    .todo-list-header-colors {
      display: flex;
      .todo-list-header-color-num {
        display: flex;
        margin-left: 8px;
        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0;
          margin-left: 8px;
        }
        .todo-list-header-round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
`;

interface Iprops {
  todos: TodoType[];
}

//export를 하지 않을때 interface를 써주는게 좋음. props 타입에 대해서
// 배열에 길이를 가져온다. todos length , todos 안에 todo type 배열이 들어감
const TodoList: React.FC<Iprops> = ({ todos }) => {
  // const getTodoColorNums = useCallback(() => {
  //   let red = 0;
  //   let orange = 0;
  //   let yellow = 0;
  //   let green = 0;
  //   let blue = 0;
  //   let navy = 0;

  //   todos.forEach((todo) => {
  //     switch (todo.color) {
  //       case 'red':
  //         red += 1;
  //         break;
  //       case 'orange':
  //         orange += 1;
  //         break;
  //       case 'yellow':
  //         yellow += 1;
  //         break;
  //       case 'green':
  //         green += 1;
  //         break;
  //       case 'blue':
  //         blue += 1;
  //         break;
  //       case 'navy':
  //         navy += 1;
  //         break;
  //       default:
  //         break;
  //     }
  //   });

  //   return {
  //     red,
  //     orange,
  //     yellow,
  //     green,
  //     blue,
  //     navy,
  //   };
  // }, [todos]);
  // // 색상별 투두 개수
  // const TodoColorNums = useMemo(getTodoColorNums, [todos]);

  type ObjectIndexType = {
    [key: string]: number | undefined;
  };
  const TodoColorNums2 = useMemo(() => {
    const colors: ObjectIndexType = {};
    todos.forEach((todo) => {
      const value = colors[todo.color];
      if (!value) {
        // 존재하지 않던 키라면
        colors[`${todo.color}`] = 1;
      } else {
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span> {todos.length} </span>
        </p>
        <div className="todo-list-header-colors">
          {Object.keys(TodoColorNums2).map((color, index) => (
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{TodoColorNums2[color]}개</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li className="todo-item" key={todo.id}>
              <div className="todo-left-side">
                <div className={`todo-color-block bg-${todo.color}`} />
                <p
                  className={`todo-text ${
                    todo.checked ? 'checked-todo-text' : ''
                  }`}
                >
                  {todo.text}
                </p>
              </div>
              <div className="todo-right-side">
                {todo.checked && (
                  <>
                    <BsFillTrashFill
                      className="todo-trash-can"
                      onClick={() => {}}
                    />
                    <AiOutlineCheck
                      className="todo-check-mark"
                      onClick={() => {}}
                    />
                  </>
                )}
                {!todo.checked && (
                  <button
                    type="button"
                    className="todo-button"
                    onClick={() => {}}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default TodoList;
