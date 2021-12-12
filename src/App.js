import React from 'react';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from './components/Filter';
import { addTask, removeTask, toggleCompleted, clearAll, completeAll } from './redux/actions/tasks';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleClickAdd = (text, checked) => {
    dispatch(addTask(text, checked));
  };

  const handleClickRemove = (id) => {
    if (window.confirm('Удалить задачу?')) {
      dispatch(removeTask(id));
    }
  };

  const handleClickToggle = (id) => {
    dispatch(toggleCompleted(id));
  };

  const handleClickCompleteAll = () => {
    dispatch(completeAll());
  };

  const handleClickClearAll = () => {
    if (window.confirm('Очистить все задачи?')) {
      dispatch(clearAll());
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onAdd={handleClickAdd} />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {state.tasks
            .filter((obj) => {
              if (state.filter.filterBy === 'all') {
                return true;
              }
              if (state.filter.filterBy === 'completed') {
                return obj.completed;
              }
              if (state.filter.filterBy === 'active') {
                return !obj.completed;
              }
            })
            .map((obj) => (
              <Item
                key={obj.id}
                text={obj.text}
                completed={obj.completed}
                onClickRemove={() => handleClickRemove(obj.id)}
                onClickCheckbox={() => handleClickToggle(obj.id)}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={!state.tasks.length} onClick={handleClickCompleteAll}>
            Отметить всё
          </Button>
          <Button disabled={!state.tasks.length} onClick={handleClickClearAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
