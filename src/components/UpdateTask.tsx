import { useState, ChangeEvent, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import './create-task.css';
import { GET_TASKS, UPDATE_TASK } from '../queries/taskQuery';
import { UpdateTaskProps } from '../Types';

function UpdateTask({ setIsOpen, task }: UpdateTaskProps): JSX.Element {
  const [title, setTitle] = useState(task.title);
  const [updateTask, { loading }] = useMutation(UPDATE_TASK, {
    refetchQueries: [
      {
        query: GET_TASKS,
        variables: {
          userId: '633c4ddc2e1104f3a4c8c805',
        },
      },
    ],
  });
  const handleTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateTask({
      variables: {
        title: title,
        id: task.id,
        completed: task.completed,
      },
    });
    setTitle('');
    setIsOpen(false);
  };
  return (
    <form onSubmit={handleSubmit} className='create-task'>
      <div className='wrapper'>
        <div className='head-container'>
          <div className='brand'>Update Task</div>
          <span
            className='close-btn'
            onClick={() => setIsOpen((open) => !open)}
          >
            Close X
          </span>
        </div>
        <input
          // readOnly={title.length ? false : true}
          className='title-input'
          onChange={handleTitle}
          value={title}
          type='text'
          name='title'
        />
        <button className='add-task'>
          {loading ? 'Updating task...' : 'Update task'}
        </button>
      </div>
    </form>
  );
}

export default UpdateTask;
