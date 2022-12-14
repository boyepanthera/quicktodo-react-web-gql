import { useState, ChangeEvent, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import './create-task.css';
import { GET_TASKS, CREATE_TASK } from '../queries/taskQuery';
import { CreateTaskProps } from '../Types';

function CreateTask({ setIsOpen }: CreateTaskProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [addTask, { loading }] = useMutation(CREATE_TASK, {
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
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask({ variables: { title, userId: '633c4ddc2e1104f3a4c8c805' } });
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit} className='create-task'>
      <div className='wrapper'>
        <div className='head-container'>
          <div className='brand'> Create Task</div>
          <span
            className='close-btn'
            onClick={() => setIsOpen((open) => !open)}
          >
            Close X
          </span>
        </div>
        <input
          className='title-input'
          onChange={handleTitle}
          value={title}
          type='text'
          name='title'
        />
        <button disabled={title.length ? false : true} className='add-task'>
          {loading ? 'Adding tasks...' : 'Add task'}
        </button>
      </div>
    </form>
  );
}

export default CreateTask;
