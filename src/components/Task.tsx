import { useState } from 'react';
import CheckedBox from './CheckedBox';
import UncheckedBox from './UncheckedBox';
import { TaskComponentProps } from '../Types';

function Task({
  task: { id, title, completed: initialCheck },
}: TaskComponentProps): JSX.Element {
  const [checked, setChecked] = useState(initialCheck);
  return (
    <div className='task' onClick={() => setChecked((checked) => !checked)}>
      <span>{checked ? <CheckedBox /> : <UncheckedBox />}</span>
      <span className={checked ? 'checked-task-text' : 'task-text'}>
        {title}
      </span>
    </div>
  );
}

export default Task;
