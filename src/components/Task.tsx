import { useState } from 'react';
import { useMutation } from '@apollo/client';
import CheckedBox from './CheckedBox';
import UncheckedBox from './UncheckedBox';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import { TaskComponentProps } from '../Types';
import { GET_TASKS, UPDATE_TASK } from '../queries/taskQuery';

function Task({
  task: { id, title, completed: initialCheck },
  onUpdate,
  onDelete,
}: TaskComponentProps): JSX.Element {
  const [checked, setChecked] = useState(initialCheck);
  const [updateTask] = useMutation(UPDATE_TASK, {
    refetchQueries: [
      {
        query: GET_TASKS,
        variables: {
          userId: '633c4ddc2e1104f3a4c8c805',
        },
      },
    ],
  });

  return (
    <div className='task'>
      <div
        className='text-group'
        onClick={async () => {
          setChecked((checked) => !checked);
          await updateTask({
            variables: {
              title: title,
              id: id,
              completed: !checked,
            },
          });
        }}
      >
        <span>{checked ? <CheckedBox /> : <UncheckedBox />}</span>
        <span className={checked ? 'checked-task-text' : 'task-text'}>
          {title}
        </span>
      </div>

      <div className='mutation-container'>
        <div
          onClick={(event) => {
            onUpdate();
          }}
        >
          <EditIcon />
        </div>
        <div onClick={(event) => onDelete()}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}

export default Task;
