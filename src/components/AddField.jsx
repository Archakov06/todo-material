import React from 'react';

import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';

export const AddField = ({ onAdd }) => {
  const filterBy = useSelector((state) => state.filterBy);
  const [inputValue, setInputValue] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  console.log(filterBy);

  const onClickAdd = () => {
    onAdd(inputValue, checked);
    setInputValue('');
    setChecked(false);
  };

  return (
    <div className="field">
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button onClick={onClickAdd}>
        <AddIcon />
      </Button>
    </div>
  );
};
