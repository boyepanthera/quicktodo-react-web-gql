import { useState, ChangeEvent, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import './create-task.css';
import { GET_TASKS, DELETE_TASK } from '../queries/taskQuery';
import { UpdateTaskProps } from '../Types';

function DeleteTask({ setIsOpen, task }: UpdateTaskProps): JSX.Element {
  const [title, setTitle] = useState(task.title);
  const [deleteTask, { loading }] = useMutation(DELETE_TASK, {
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
    await deleteTask({ variables: { title, taskId: task.id } });
    setTitle('');
    setIsOpen(false);
  };
  return (
    <form onSubmit={handleSubmit} className='create-task'>
      <div className='wrapper'>
        <div className='head-container'>
          <div className='brand'>Delete Task</div>
          <span
            className='close-btn'
            onClick={() => setIsOpen((open) => !open)}
          >
            Close X
          </span>
        </div>
        <input
          disabled={true}
          className='title-input'
          onChange={handleTitle}
          value={title}
          type='text'
          name='title'
        />
        <div className='button-container'>
          <button
            disabled={title.length ? false : true}
            className='delete-task'
          >
            {loading ? 'Deleting task...' : 'Yes Delete!'}
          </button>
          <button
            type='button'
            onClick={() => setIsOpen((open) => !open)}
            disabled={title.length ? false : true}
            className='delete-task-reject'
          >
            No Don't!
          </button>
        </div>
      </div>
    </form>
  );
}

export default DeleteTask;
